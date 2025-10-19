import React, { useState } from 'react';
import { Upload, AlertTriangle, Shield, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Scanner = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setError(null);
      setResult(null);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setError('Please select a valid image file');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setError(null);
      setResult(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const calculateRiskScore = (analysis) => {
    let score = 0;
    if (analysis.moneyRequest) score += 40;
    if (analysis.loveBombing) score += 20;
    if (analysis.urgency) score += 15;
    if (analysis.avoidance) score += 15;
    score += (analysis.inconsistencies?.length || 0) * 10;
    score += (analysis.commonPhrasesCount || 0) * 12;
    return Math.min(score, 100);
  };

  const getRiskLevel = (score) => {
    if (score <= 30) return { level: 'SAFE', color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.1)' };
    if (score <= 70) return { level: 'CAUTION', color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.1)' };
    return { level: 'DANGER', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.1)' };
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result;
        
        try {
          const response = await axios.post(`${BACKEND_URL}/api/analyze`, {
            imageBase64: base64String
          });

          const analysis = response.data;
          const riskScore = calculateRiskScore(analysis);
          const riskLevel = getRiskLevel(riskScore);

          setResult({
            ...analysis,
            riskScore,
            riskLevel
          });
        } catch (err) {
          console.error('Analysis error:', err);
          setError(err.response?.data?.detail || 'Analysis failed. Please try again.');
        } finally {
          setLoading(false);
        }
      };
      reader.readAsDataURL(selectedFile);
    } catch (err) {
      setError('Failed to process image');
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Upload Area */}
      <div 
        className="border-2 border-dashed rounded-xl p-8 text-center transition-all"
        style={{ 
          borderColor: previewUrl ? '#10b981' : 'rgba(0, 0, 0, 0.1)',
          backgroundColor: previewUrl ? 'rgba(16, 185, 129, 0.05)' : 'rgba(0, 0, 0, 0.02)'
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {!previewUrl ? (
          <div className="flex flex-col items-center gap-4">
            <Upload className="w-12 h-12" style={{ color: '#2563eb', strokeWidth: 1.5 }} />
            <div>
              <p className="body-large mb-2" style={{ color: 'rgb(14, 15, 12)' }}>
                Drop your screenshot here
              </p>
              <p className="body-small" style={{ color: 'rgb(131, 146, 140)' }}>
                or click to browse
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="btn-primary cursor-pointer">
              Select Image
            </label>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="max-h-64 rounded-lg shadow-md"
            />
            <div className="flex gap-3">
              <button 
                onClick={handleAnalyze}
                disabled={loading}
                className="btn-primary"
                style={{ opacity: loading ? 0.6 : 1 }}
              >
                {loading ? 'Analyzing...' : 'Analyze Message'}
              </button>
              <button 
                onClick={() => {
                  setPreviewUrl(null);
                  setSelectedFile(null);
                  setResult(null);
                  setError(null);
                }}
                className="btn-secondary"
                disabled={loading}
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="mt-6 product-card" style={{ borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#ef4444', strokeWidth: 2 }} />
            <p className="body-medium" style={{ color: '#ef4444' }}>{error}</p>
          </div>
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div className="mt-8 space-y-6">
          {/* Risk Score Card */}
          <div className="product-card text-center" style={{ 
            borderColor: result.riskLevel.color,
            backgroundColor: result.riskLevel.bgColor
          }}>
            <div className="flex flex-col items-center gap-4">
              {result.riskLevel.level === 'SAFE' && (
                <CheckCircle className="w-16 h-16" style={{ color: result.riskLevel.color, strokeWidth: 1.5 }} />
              )}
              {result.riskLevel.level === 'CAUTION' && (
                <AlertTriangle className="w-16 h-16" style={{ color: result.riskLevel.color, strokeWidth: 1.5 }} />
              )}
              {result.riskLevel.level === 'DANGER' && (
                <XCircle className="w-16 h-16" style={{ color: result.riskLevel.color, strokeWidth: 1.5 }} />
              )}
              
              <div>
                <div className="text-6xl font-bold mb-2" style={{ color: result.riskLevel.color }}>
                  {result.riskScore}
                </div>
                <div className="text-2xl font-semibold mb-1" style={{ color: result.riskLevel.color }}>
                  {result.riskLevel.level}
                </div>
                <p className="body-small" style={{ color: 'rgb(131, 146, 140)' }}>
                  Risk Score (0-100)
                </p>
              </div>
            </div>
          </div>

          {/* Red Flags */}
          <div className="product-card">
            <h3 className="heading-3 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: '#2563eb', strokeWidth: 1.5 }} />
              Detected Red Flags
            </h3>
            {result.redFlags && result.redFlags.length > 0 ? (
              <ul className="space-y-2">
                {result.redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span style={{ color: '#ef4444', fontSize: '1.2rem' }}>•</span>
                    <span className="body-medium" style={{ color: 'rgb(14, 15, 12)' }}>{flag}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="body-medium" style={{ color: '#10b981' }}>
                ✓ No major red flags detected
              </p>
            )}
          </div>

          {/* Inconsistencies */}
          {result.inconsistencies && result.inconsistencies.length > 0 && (
            <div className="product-card">
              <h3 className="heading-3 mb-4">Inconsistencies Found</h3>
              <ul className="space-y-2">
                {result.inconsistencies.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span style={{ color: '#f59e0b', fontSize: '1.2rem' }}>•</span>
                    <span className="body-medium" style={{ color: 'rgb(14, 15, 12)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Explanation */}
          <div className="product-card">
            <h3 className="heading-3 mb-4">Analysis</h3>
            <p className="body-medium mb-4" style={{ color: 'rgb(14, 15, 12)' }}>
              {result.explanation}
            </p>
            <div className="pt-4 border-t" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
              <h4 className="font-semibold mb-2" style={{ color: 'rgb(0, 55, 32)' }}>Recommendation:</h4>
              <p className="body-medium" style={{ color: 'rgb(14, 15, 12)' }}>
                {result.recommendation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scanner;

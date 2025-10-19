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
    if (score <= 30) return { level: 'SAFE', color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.15)', glow: '0 0 35px rgba(16, 185, 129, 0.6)', borderColor: '#10B981' };
    if (score <= 70) return { level: 'CAUTION', color: '#F59E0B', bgColor: 'rgba(245, 158, 11, 0.15)', glow: '0 0 35px rgba(245, 158, 11, 0.6)', borderColor: '#F59E0B' };
    return { level: 'DANGER', color: '#EF4444', bgColor: 'rgba(239, 68, 68, 0.15)', glow: '0 0 35px rgba(239, 68, 68, 0.6)', borderColor: '#EF4444' };
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
        className="border-2 border-dashed rounded-xl p-10 text-center transition-all pulse-border"
        style={{ 
          borderColor: previewUrl ? '#10B981' : 'rgba(59, 130, 246, 0.6)',
          backgroundColor: previewUrl ? 'rgba(16, 185, 129, 0.05)' : '#1E293B',
          boxShadow: previewUrl ? '0 0 35px rgba(16, 185, 129, 0.4)' : '0 0 25px rgba(59, 130, 246, 0.3)'
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {!previewUrl ? (
          <div className="flex flex-col items-center gap-5">
            <Upload className="w-14 h-14" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
            <div>
              <p className="body-large mb-2" style={{ color: '#F1F5F9', fontSize: '1.2rem' }}>
                Drop your screenshot here
              </p>
              <p className="body-small" style={{ color: '#94A3B8' }}>
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
          <div className="flex flex-col items-center gap-5">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="max-h-72 rounded-lg"
              style={{ border: '2px solid #10B981', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)' }}
            />
            <div className="flex gap-4">
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
        <div className="mt-8 cyber-panel fade-in-up" style={{ borderColor: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #EF4444' }}>
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#EF4444', strokeWidth: 2 }} />
            <p className="body-medium" style={{ color: '#FCA5A5' }}>{error}</p>
          </div>
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div className="mt-12 space-y-6">
          {/* Risk Score Card */}
          <div className="cyber-panel text-center scale-in" style={{ 
            borderColor: result.riskLevel.color,
            backgroundColor: result.riskLevel.bgColor,
            boxShadow: result.riskLevel.glow,
            borderWidth: '2px'
          }}>
            <div className="flex flex-col items-center gap-6 py-8">
              {result.riskLevel.level === 'SAFE' && (
                <CheckCircle className="w-20 h-20" style={{ color: result.riskLevel.color, strokeWidth: 1.5 }} />
              )}
              {result.riskLevel.level === 'CAUTION' && (
                <AlertTriangle className="w-20 h-20" style={{ color: result.riskLevel.color, strokeWidth: 1.5 }} />
              )}
              {result.riskLevel.level === 'DANGER' && (
                <XCircle className="w-20 h-20" style={{ color: result.riskLevel.color, strokeWidth: 1.5 }} />
              )}
              
              <div>
                <div className="text-8xl font-black mb-3" style={{ color: result.riskLevel.color, fontFamily: 'Inter' }}>
                  {result.riskScore}
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: result.riskLevel.color }}>
                  {result.riskLevel.level}
                </div>
                <p className="body-small" style={{ color: '#94A3B8' }}>
                  Risk Score (0-100)
                </p>
              </div>
            </div>
          </div>

          {/* Red Flags */}
          <div className="cyber-panel fade-in-up">
            <h3 className="heading-3 mb-5 flex items-center gap-2">
              <Shield className="w-6 h-6" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
              Detected Red Flags
            </h3>
            {result.redFlags && result.redFlags.length > 0 ? (
              <ul className="space-y-3">
                {result.redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 rounded" style={{ 
                    background: index % 2 === 0 ? 'rgba(239, 68, 68, 0.12)' : 'rgba(239, 68, 68, 0.08)',
                    borderLeft: '3px solid #EF4444'
                  }}>
                    <span style={{ color: '#EF4444', fontSize: '1.2rem', lineHeight: '1.4' }}>•</span>
                    <span className="body-medium" style={{ color: '#FCA5A5', fontSize: '1.05rem' }}>{flag}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="body-medium p-4 rounded" style={{ color: '#10B981', background: 'rgba(16, 185, 129, 0.1)' }}>
                ✓ No major red flags detected
              </p>
            )}
          </div>

          {/* Inconsistencies */}
          {result.inconsistencies && result.inconsistencies.length > 0 && (
            <div className="cyber-panel fade-in-up">
              <h3 className="heading-3 mb-5">Inconsistencies Found</h3>
              <ul className="space-y-3">
                {result.inconsistencies.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 rounded" style={{ 
                    background: index % 2 === 0 ? 'rgba(245, 158, 11, 0.12)' : 'rgba(245, 158, 11, 0.08)',
                    borderLeft: '3px solid #F59E0B'
                  }}>
                    <span style={{ color: '#F59E0B', fontSize: '1.2rem', lineHeight: '1.4' }}>•</span>
                    <span className="body-medium" style={{ color: '#FCD34D', fontSize: '1.05rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Analysis & Recommendation */}
          <div className="cyber-panel fade-in-up" style={{ borderLeft: `4px solid ${result.riskLevel.borderColor}` }}>
            <h3 className="heading-3 mb-5">Analysis</h3>
            <p className="body-medium mb-6" style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: '1.7' }}>
              {result.explanation}
            </p>
            <div className="pt-6" style={{ borderTop: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <h4 className="font-semibold mb-4" style={{ color: result.riskLevel.borderColor, fontSize: '1.2rem' }}>
                Recommendation:
              </h4>
              <p className="body-medium" style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: '1.7' }}>
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
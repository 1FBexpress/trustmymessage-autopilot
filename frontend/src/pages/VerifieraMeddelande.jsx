import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle, Upload, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Scanner from '../components/Scanner';

const VerifieraMeddelande = () => {
  return (
    <div className="min-h-screen" style={{ background: '#0F172A' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '60vh', paddingTop: '8rem' }}>
        <div className="hero-content relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Upload className="w-16 h-16" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <div className="absolute inset-0" style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)', borderRadius: '50%' }}></div>
            </div>
          </div>
          <h1 className="heading-1 mb-6">
            Verifiera ditt meddelande
          </h1>
          <p className="body-large mb-4" style={{ maxWidth: '640px', margin: '0 auto', marginBottom: '1rem' }}>
            Ladda upp en skärmdump eller bild av ett missstänkt meddelande. Vår AI analyserar det på sekunder.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Lock className="w-4 h-4" style={{ color: '#10B981' }} />
            <p className="body-small" style={{ color: '#10B981', fontStyle: 'italic' }}>
              100% säkert. Vi lagrar aldrig dina bilder.
            </p>
          </div>
        </div>
      </section>

      {/* Scanner Section */}
      <section className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-4xl">
          <Scanner />
        </div>
      </section>

      {/* Info Section - Vad analyserar vi? */}
      <section className="py-20 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="heading-2 text-center mb-12">Vad analyserar vi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-panel">
              <AlertTriangle className="w-8 h-8 mb-4" style={{ color: '#EF4444', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.25rem' }}>Varningssignaler</h3>
              <ul className="space-y-2">
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Begäran om pengar eller gåvor</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• "Love bombing" - överdrivet romantiska fraser</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Brådska och press att agera snabbt</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Undvikande beteende (ej video, aldrig mötas)</li>
              </ul>
            </div>

            <div className="cyber-panel">
              <CheckCircle className="w-8 h-8 mb-4" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.25rem' }}>Språkanalys</h3>
              <ul className="space-y-2">
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Vanliga bedrägerifraser</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Inkonsekvenser i historien</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Grammatiska fel och översättningsmisstag</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Mönster från kända scam-databaser</li>
              </ul>
            </div>

            <div className="cyber-panel">
              <Shield className="w-8 h-8 mb-4" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.25rem' }}>Riskbedömning</h3>
              <ul className="space-y-2">
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Genererar riskpoäng 0-100</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Identifierar specifika röda flaggor</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Förklarar varje varningssignal</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Ger tydliga rekommendationer</li>
              </ul>
            </div>

            <div className="cyber-panel">
              <Lock className="w-8 h-8 mb-4" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.25rem' }}>Integritet & Säkerhet</h3>
              <ul className="space-y-2">
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Bilder processas i realtid</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Inget lagras på våra servrar</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Krypterad överföring (HTTPS)</li>
                <li className="body-medium" style={{ color: '#CBD5E1' }}>• Anonym användning - ingen registrering</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="body-large mb-6" style={{ color: '#CBD5E1' }}>
              Vill du lära dig mer om hur du känner igen bedrägerier?
            </p>
            <Link to="/blog/hur-kanner-man-igen-bedragare-online-2025" className="btn-primary">
              Läs vår guide för 2025
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VerifieraMeddelande;

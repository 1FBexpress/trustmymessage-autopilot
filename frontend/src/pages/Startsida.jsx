import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, AlertTriangle, ArrowRight, Upload } from 'lucide-react';

const Startsida = () => {
  return (
    <div className="min-h-screen" style={{ background: '#0F172A' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Shield className="w-24 h-24" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <div className="absolute inset-0" style={{ boxShadow: '0 0 50px rgba(16, 185, 129, 0.5)', borderRadius: '50%' }}></div>
            </div>
          </div>
          <h1 className="heading-1 mb-6">
            Verifiera vilket meddelande som helst med AI
          </h1>
          <p className="body-large mb-10" style={{ maxWidth: '640px', margin: '0 auto', marginBottom: '2.5rem' }}>
            Är ditt meddelande äkta eller bedrägeri? TrustMyMessage använder AI för att analysera SMS, mejl och chattar på sekunder.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/verifiera-meddelande" className="btn-primary glow-pulse">
              <Upload className="w-5 h-5" />
              Verifiera meddelande gratis
            </Link>
            <Link to="/ai-bedrageriskydd" className="btn-secondary">
              Läs mer om AI-bedrägeriskydd
            </Link>
          </div>
        </div>
      </section>

      {/* Hur fungerar det */}
      <section className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-2 text-center mb-12">Hur fungerar meddelandeverifiering?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-panel text-center">
              <div className="flex justify-center mb-4">
                <Upload className="w-12 h-12" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              </div>
              <h3 className="heading-3 mb-4" style={{ fontSize: '1.25rem' }}>1. Ladda upp meddelandet</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Ta en skärmdump eller kopiera texten från det misstänkta meddelandet. Stöd för SMS, mejl, WhatsApp och alla chattappar.
              </p>
            </div>

            <div className="cyber-panel text-center">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="w-12 h-12" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
              </div>
              <h3 className="heading-3 mb-4" style={{ fontSize: '1.25rem' }}>2. AI-analys på sekunder</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Vår AI analyserar språkmönster, varningssignaler, bedrägliga metoder och jämför med kända scam-databaser.
              </p>
            </div>

            <div className="cyber-panel text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              </div>
              <h3 className="heading-3 mb-4" style={{ fontSize: '1.25rem' }}>3. Få riskbedömning</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Du får ett tydligt riskbetyg (0-100) med förklaring och rekommendationer för hur du ska hantera meddelandet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skydda dig mot digitala bedragare */}
      <section className="py-20 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="heading-2 text-center mb-12">Skydda dig mot digitala bedragare</h2>
          <div className="space-y-6">
            <div className="cyber-panel" style={{ borderLeft: '4px solid #EF4444' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#EF4444' }}>Romantikbedrägerier</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Bedragare som bygger romantiska relationer online för att sedan be om pengar. Kännetecken: snabb förälskelse, aldrig kan träffas fysiskt, plötsliga ekonomiska kriser.
              </p>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #F59E0B' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#F59E0B' }}>Investeringsbedrägerier</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Falska investeringsmöjligheter i krypto, aktier eller fastigheter med löfte om snabb vinst. Kännetecken: "garanterad avkastning", "begränsat erbjudande", otrygg betalningsmetod.
              </p>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #3B82F6' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#3B82F6' }}>Phishing-mejl</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Mejl som utger sig för att vara från banker eller myndigheter. Kännetecken: begär personuppgifter, felaktig avsändare, skapa brådska eller hot.
              </p>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #10B981' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#10B981' }}>Falska kundtjänster</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Bedragare som utger sig för att vara från kända företag. Kännetecken: ringer upp oväntat, ber om lösenord eller bankuppgifter, använder säljpressande taktik.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/kunskapscenter" className="btn-secondary flex items-center gap-2 mx-auto" style={{ maxWidth: '300px' }}>
              Läs mer i vårt kunskapscenter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vem använder TrustMyMessage */}
      <section className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-2 text-center mb-12">Vem använder TrustMyMessage?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-panel">
              <h3 className="heading-3 mb-4">Privatpersoner</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Äldre som ofta är måltavlor för bedragare</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Föräldrar som vill skydda sina barn online</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Alla som får misstänkta meddelanden</span>
                </li>
              </ul>
            </div>

            <div className="cyber-panel">
              <h3 className="heading-3 mb-4">Företag</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Skydda kundkommunikation från bedrägeri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Integrera i befintliga chattsystem</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Bygg förtroende med verifieringsmärke</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/ai-bedrageriskydd" className="btn-primary">
              Se AI-bedrägeriskydd för företag
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-2 mb-6">Börja verifiera meddelanden idag</h2>
          <p className="body-large mb-8" style={{ color: '#CBD5E1' }}>
            100% gratis att testa. Ingen registrering krävs. Skydda dig själv och dina närstående från digitala bedragare.
          </p>
          <Link to="/verifiera-meddelande" className="btn-primary glow-pulse" style={{ fontSize: '1.1rem' }}>
            <Upload className="w-5 h-5" />
            Verifiera ditt första meddelande
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Startsida;
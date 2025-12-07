import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, CheckCircle, Code, BarChart, Lock, ArrowRight } from 'lucide-react';

const AIBedrageriskydd = () => {
  return (
    <div className="min-h-screen" style={{ background: '#0F172A' }}>
      {/* Hero */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)', paddingTop: '8rem' }}>
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-20 h-20" style={{ color: '#10B981', strokeWidth: 1.5 }} />
          </div>
          <h1 className="heading-1 mb-6">AI-driven bedrägeriskydd för digital kommunikation</h1>
          <p className="body-large mb-10" style={{ maxWidth: '700px', margin: '0 auto', marginBottom: '2.5rem', color: '#CBD5E1' }}>
            Skydda dina kunder mot bedrägliga meddelanden. Vår AI analyserar SMS, mejl och chattar i realtid och identifierar bedrägerier innan de skadar ditt företag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#priser" className="btn-primary">
              Se priser och paket
            </a>
            <a href="#kontakt" className="btn-secondary">
              Boka demo
            </a>
          </div>
        </div>
      </section>

      {/* Så fungerar vår AI-analys */}
      <section className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-2 text-center mb-12">Så fungerar vår AI-analys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-panel">
              <Zap className="w-10 h-10 mb-4" style={{ color: '#F59E0B', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3">Realtidsanalys</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Meddelanden analyseras inom millisekunder med vår GPT-4-baserade AI som tränats på miljontals bedrägerimönster från hela världen.
              </p>
            </div>

            <div className="cyber-panel">
              <BarChart className="w-10 h-10 mb-4" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3">Riskbedömning 0-100</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Varje meddelande får ett riskbetyg baserat på språkmönster, urgency-taktik, begäran om pengar, kända scam-fraser och avsändaranalys.
              </p>
            </div>

            <div className="cyber-panel">
              <Lock className="w-10 h-10 mb-4" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3">GDPR-säker</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Meddelanden lagras aldrig. All analys sker i realtid och raderas omedelbart efter. 100% GDPR-kompatibel lösning för svenska företag.
              </p>
            </div>

            <div className="cyber-panel">
              <Code className="w-10 h-10 mb-4" style={{ color: '#6366F1', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3">Enkel integration</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                REST API med komplett dokumentation. Implementera på 1 dag. Stöd för JavaScript, Python, PHP och alla större programmeringsspråk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vilka hot upptäcker vi */}
      <section className="py-20 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="heading-2 text-center mb-12">Vilka hot upptäcker vi?</h2>
          <div className="space-y-6">
            <div className="cyber-panel" style={{ borderLeft: '4px solid #EF4444' }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">💔</div>
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#EF4444' }}>Romantikbedrägerier</h3>
                  <p className="body-medium" style={{ color: '#CBD5E1' }}>
                    AI:n känner igen "love bombing"-taktik, falska profiler, akuta pengabehov och typiska scenarier som används av romantikbedragare.
                  </p>
                </div>
              </div>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #F59E0B' }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#F59E0B' }}>Investeringsbedrägerier</h3>
                  <p className="body-medium" style={{ color: '#CBD5E1' }}>
                    Upptäcker falska krypto-erbjudanden, pyramidspel, "garanterad avkastning"-påståenden och andra finansiella bedrägerier.
                  </p>
                </div>
              </div>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #3B82F6' }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎣</div>
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#3B82F6' }}>Phishing-attacker</h3>
                  <p className="body-medium" style={{ color: '#CBD5E1' }}>
                    Identifierar falska bankmejl, myndighetsbedrägerier, fejkade inloggningslänkar och andra phishing-metoder med 98% noggrannhet.
                  </p>
                </div>
              </div>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #10B981' }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🚨</div>
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#10B981' }}>Akutbedrägerier</h3>
                  <p className="body-medium" style={{ color: '#CBD5E1' }}>
                    Upptäcker "barnbarnsbluffar", falska olycksmeddelanden, nödsituationer och andra urgency-baserade bedrägerier.
                  </p>
                </div>
              </div>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #6366F1' }}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">👤</div>
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#6366F1' }}>Identitetsstöld</h3>
                  <p className="body-medium" style={{ color: '#CBD5E1' }}>
                    AI:n varnar när meddelanden begär personnummer, bankkortsnummer, lösenord eller andra känsliga personuppgifter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrera TrustMyMessage API */}
      <section className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="heading-2 text-center mb-12">Integrera TrustMyMessage API</h2>
          <div className="cyber-panel" style={{ background: '#0F172A' }}>
            <h3 className="heading-3 mb-6">Enkel implementering på 5 minuter</h3>
            <pre className="bg-slate-900 p-6 rounded-lg overflow-x-auto mb-6" style={{ border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <code className="text-green-400 text-sm">
{`// JavaScript exempel
const response = await fetch('https://api.trustmymessage.com/v1/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: messageText,
    language: 'sv'
  })
});

const result = await response.json();
console.log('Riskbetyg:', result.riskScore);
console.log('Bedöming:', result.verdict); // 'safe', 'warning', 'danger'`}
              </code>
            </pre>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <span className="body-medium" style={{ color: '#CBD5E1' }}>Komplett API-dokumentation på svenska</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <span className="body-medium" style={{ color: '#CBD5E1' }}>SDK för JavaScript, Python, PHP</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <span className="body-medium" style={{ color: '#CBD5E1' }}>99.9% uptime-garanti</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <span className="body-medium" style={{ color: '#CBD5E1' }}>Dedikerad teknisk support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Priser och paket */}
      <section id="priser" className="py-20 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-2 text-center mb-12">Priser och paket</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="cyber-panel text-center">
              <h3 className="heading-3 mb-3">Starter</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: '#10B981' }}>0 kr</div>
              <p className="body-small mb-6" style={{ color: '#94A3B8' }}>Gratis för alltid</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>100 analyser/månad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>Grundläggande API</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>E-postsupport</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Kom igång</button>
            </div>

            {/* Business */}
            <div className="cyber-panel text-center" style={{ borderColor: '#10B981', borderWidth: '2px' }}>
              <div className="inline-block px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', fontSize: '0.75rem', fontWeight: 600 }}>
                POPULÄRAST
              </div>
              <h3 className="heading-3 mb-3">Business</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: '#10B981' }}>1 990 kr</div>
              <p className="body-small mb-6" style={{ color: '#94A3B8' }}>per månad</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>10 000 analyser/månad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>Fullständigt API</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>Prioriterad support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>Anpassade filter</span>
                </li>
              </ul>
              <button className="btn-primary w-full">Välj Business</button>
            </div>

            {/* Enterprise */}
            <div className="cyber-panel text-center">
              <h3 className="heading-3 mb-3">Enterprise</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: '#3B82F6' }}>Kontakta oss</div>
              <p className="body-small mb-6" style={{ color: '#94A3B8' }}>Skräddarsydd lösning</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>Obegränsat antal analyser</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>Dedikerad server</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>24/7 support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-small" style={{ color: '#CBD5E1' }}>SLA-garanti</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Kontakta säljteam</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-2 mb-6">Börja skydda dina kunder idag</h2>
          <p className="body-large mb-8" style={{ color: '#CBD5E1' }}>
            Testa gratis i 14 dagar. Inget kreditkort krävs. Implementera på en dag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#priser" className="btn-primary">
              Starta gratis testperiod
            </a>
            <Link to="/" className="btn-secondary flex items-center gap-2">
              Tillbaka till startsidan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBedrageriskydd;
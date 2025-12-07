import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Zap, Lock, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIBedrageriskydd = () => {
  return (
    <div className="min-h-screen" style={{ background: '#0F172A' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '70vh', paddingTop: '8rem' }}>
        <div className="hero-content relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Brain className="w-20 h-20" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <div className="absolute inset-0" style={{ boxShadow: '0 0 50px rgba(16, 185, 129, 0.6)', borderRadius: '50%' }}></div>
            </div>
          </div>
          <h1 className="heading-1 mb-6">
            AI-bedrägeriskydd för alla
          </h1>
          <p className="body-large mb-10" style={{ maxWidth: '640px', margin: '0 auto', marginBottom: '2.5rem' }}>
            Artificiell intelligens som skyddar dig från digitala bedrägerier. Verifiera meddelanden på sekunder med avancerad språkanalys.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/verifiera-meddelande" className="btn-primary glow-pulse">
              Testa gratis nu
            </Link>
            <a href="#hur-det-fungerar" className="btn-secondary">
              Läs mer
            </a>
          </div>
        </div>
      </section>

      {/* Hur AI-skyddet fungerar */}
      <section id="hur-det-fungerar" className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-2 text-center mb-4">Hur AI-skyddet fungerar</h2>
          <p className="body-large text-center mb-12" style={{ color: '#94A3B8', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Vår AI använder avancerade språkmodeller tränade på tusentals kända bedrägerier för att identifiera varningssignaler.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-panel text-center">
              <div className="flex justify-center mb-4">
                <Brain className="w-12 h-12" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              </div>
              <h3 className="heading-3 mb-4" style={{ fontSize: '1.25rem' }}>1. AI-analys</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Vår AI läser och förstår meddelandets innehåll, ton och kontext med hjälp av naturlig språkbehandling (NLP).
              </p>
            </div>

            <div className="cyber-panel text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
              </div>
              <h3 className="heading-3 mb-4" style={{ fontSize: '1.25rem' }}>2. Mönsterigenkänning</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Systemet jämför meddelandet med miljontals kända bedrägerimönster och identifierar gemensamma taktiker.
              </p>
            </div>

            <div className="cyber-panel text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              </div>
              <h3 className="heading-3 mb-4" style={{ fontSize: '1.25rem' }}>3. Riskrapport</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Du får en tydlig riskbedömning med förklaring av varje varningssignal och rekommendationer för hur du ska agera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vad AI:n letar efter */}
      <section className="py-20 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="heading-2 text-center mb-12">Vad AI:n letar efter</h2>
          
          <div className="space-y-6">
            <div className="cyber-panel" style={{ borderLeft: '4px solid #EF4444' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#EF4444' }}>Ekonomiska begäran</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                AI:n identifierar direkta eller indirekta försök att få pengar, gåvokort, kryptovaluta eller bankinformation. Detta inkluderar "nödsituationer", "investeringsmöjligheter" och "hjälp med avgifter".
              </p>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #F59E0B' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#F59E0B' }}>Love bombing & manipulation</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Systemet upptäcker överdrivet romantiska fraser, snabb förälskelse och emotionell manipulation som ofta används i romantikbedrägerier.
              </p>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #3B82F6' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#3B82F6' }}>Brådska & press</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                AI:n flaggar meddelanden som skapar artificiell brådska, hot, tidspress eller "begränsade erbjudanden" för att tvinga snabba beslut.
              </p>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #10B981' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#10B981' }}>Undvikande beteende</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                Systemet upptäcker mönster där avsändaren undviker videosamtal, fysiska möten eller verifiering av identitet med olika ursäkter.
              </p>
            </div>

            <div className="cyber-panel" style={{ borderLeft: '4px solid #8B5CF6' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#8B5CF6' }}>Språkliga inkonsekvenser</h3>
              <p className="body-medium" style={{ color: '#CBD5E1' }}>
                AI:n analyserar grammatik, stavning och språkanvändning för att hitta tecken på översättningsverktyg, flera författare eller kopierade mallar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fördelar med AI-skydd */}
      <section className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-2 text-center mb-12">Fördelar med AI-skydd</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-panel">
              <Zap className="w-8 h-8 mb-3" style={{ color: '#F59E0B', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Snabb analys</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Få resultat på sekunder. Ingen väntan, ingen manuell granskning.
              </p>
            </div>

            <div className="cyber-panel">
              <Brain className="w-8 h-8 mb-3" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Konstant uppdaterad</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                AI:n lär sig nya bedrägerimönster dagligen och förbättrar sin precision kontinuerligt.
              </p>
            </div>

            <div className="cyber-panel">
              <Lock className="w-8 h-8 mb-3" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>100% privat</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Dina meddelanden lagras aldrig. Allt processas anonymt och raderas efter analys.
              </p>
            </div>

            <div className="cyber-panel">
              <TrendingUp className="w-8 h-8 mb-3" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Hög precision</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Tränad på miljontals exempel för att minimera både falska positiva och negativa.
              </p>
            </div>

            <div className="cyber-panel">
              <Users className="w-8 h-8 mb-3" style={{ color: '#8B5CF6', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Tillgängligt för alla</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Gratis att använda. Ingen registrering eller betalning krävs.
              </p>
            </div>

            <div className="cyber-panel">
              <CheckCircle className="w-8 h-8 mb-3" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Tydliga resultat</h3>
              <p className="body-medium" style={{ color: '#94A3B8' }}>
                Förståeliga förklaringar och konkreta rekommendationer för varje analys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vem är det för? */}
      <section className="py-20 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="heading-2 text-center mb-12">Vem är TrustMyMessage för?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-panel">
              <h3 className="heading-3 mb-4">Privatpersoner</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Äldre som ofta är måltavlor för romantikbedrägerier</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Föräldrar som vill skydda sina barn online</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Alla som får missstänkta meddelanden på sociala medier</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Personer som använder dejtingappar</span>
                </li>
              </ul>
            </div>

            <div className="cyber-panel">
              <h3 className="heading-3 mb-4">Företag & organisationer</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Kundtjänst som vill skydda sina kunder</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>E-handelsföretag som vill verifiera leverantörskommunikation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Ideella organisationer som arbetar med sårbara grupper</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#3B82F6' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>Utbildningsinstitutioner som vill skydda studenter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-2 mb-6">Börja skydda dig idag</h2>
          <p className="body-large mb-8" style={{ color: '#CBD5E1' }}>
            100% gratis att testa. Ingen registrering krävs. Skydda dig själv och dina närstående från digitala bedrägare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/verifiera-meddelande" className="btn-primary glow-pulse" style={{ fontSize: '1.1rem' }}>
              Verifiera meddelande nu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/blog/hur-kanner-man-igen-bedragare-online-2025" className="btn-secondary">
              Läs bedrägeriguiden
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIBedrageriskydd;

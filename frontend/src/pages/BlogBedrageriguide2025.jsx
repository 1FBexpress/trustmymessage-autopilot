import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Heart, DollarSign, Clock, Eye, CheckCircle, Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogBedrageriguide2025 = () => {
  return (
    <div className="min-h-screen" style={{ background: '#0F172A' }}>
      <Navigation />

      {/* Article Hero */}
      <article className="py-24 px-6" style={{ paddingTop: '8rem' }}>
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Link to="/" className="body-small hover:text-green-500 transition" style={{ color: '#94A3B8' }}>
              Hem
            </Link>
            <span className="body-small mx-2" style={{ color: '#94A3B8' }}>/</span>
            <span className="body-small" style={{ color: '#10B981' }}>Guide 2025</span>
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <h1 className="heading-1 mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Hur känner man igen bedragare online? [2025-guide]
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="body-small" style={{ color: '#94A3B8' }}>Publicerad: Januari 2025</span>
              <span className="body-small" style={{ color: '#94A3B8' }}>•</span>
              <span className="body-small" style={{ color: '#94A3B8' }}>15 min läsning</span>
            </div>
            <p className="body-large" style={{ color: '#CBD5E1', fontSize: '1.25rem', lineHeight: '1.7' }}>
              Digitala bedrägerier ökar dramatiskt varje år. I den här kompletta guiden lär du dig identifiera vanliga varningssignaler, förstå bedragares taktiker och skydda dig själv och dina nära och kära från att bli offer.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="cyber-panel mb-12" style={{ borderLeft: '4px solid #10B981' }}>
            <h2 className="heading-3 mb-4">Innehåll</h2>
            <ul className="space-y-2">
              <li><a href="#varfor-okar" className="body-medium hover:text-green-500 transition" style={{ color: '#CBD5E1' }}>1. Varför ökar digitala bedrägerier?</a></li>
              <li><a href="#vanliga-typer" className="body-medium hover:text-green-500 transition" style={{ color: '#CBD5E1' }}>2. De 6 vanligaste typerna av onlinebedrägerier</a></li>
              <li><a href="#varningssignaler" className="body-medium hover:text-green-500 transition" style={{ color: '#CBD5E1' }}>3. 10 universella varningssignaler</a></li>
              <li><a href="#psykologi" className="body-medium hover:text-green-500 transition" style={{ color: '#CBD5E1' }}>4. Psykologiska taktiker bedragare använder</a></li>
              <li><a href="#skydda-dig" className="body-medium hover:text-green-500 transition" style={{ color: '#CBD5E1' }}>5. Hur skyddar du dig?</a></li>
              <li><a href="#vad-gora" className="body-medium hover:text-green-500 transition" style={{ color: '#CBD5E1' }}>6. Vad ska du göra om du blivit lurad?</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="varfor-okar" className="mb-16">
            <h2 className="heading-2 mb-6">Varför ökar digitala bedrägerier?</h2>
            <p className="body-medium mb-4" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
              Under 2024 rapporterades över <strong style={{ color: '#10B981' }}>50 miljarder kronor</strong> i förluster från digitala bedrägerier globalt – en ökning med 35% jämfört med 2023. I Sverige ökade anmälda bedrägeribrott med 28% under samma period.
            </p>
            <p className="body-medium mb-6" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
              Det finns flera anledningar till denna explosiva ökning:
            </p>

            <div className="space-y-4 mb-8">
              <div className="cyber-panel" style={{ borderLeft: '3px solid #3B82F6' }}>
                <h3 className="heading-3 mb-2" style={{ fontSize: '1.125rem', color: '#3B82F6' }}>1. AI-verktyg gör bedrägerier lättare</h3>
                <p className="body-medium" style={{ color: '#CBD5E1' }}>
                  Bedragare använder nu ChatGPT och andra AI-verktyg för att skriva perfekta meddelanden på flera språk, skapa falska identiteter och till och med generera realistiska röstsamtal (deepfakes). Detta gör det svårare än någonsin att skilja på äkta och falska meddelanden.
                </p>
              </div>

              <div className="cyber-panel" style={{ borderLeft: '3px solid #F59E0B' }}>
                <h3 className="heading-3 mb-2" style={{ fontSize: '1.125rem', color: '#F59E0B' }}>2. Fler äldre online</h3>
                <p className="body-medium" style={{ color: '#CBD5E1' }}>
                  Pandemin fick miljontals äldre att börja använda sociala medier och dejtingappar. Tyvärr är denna grupp ofta mindre bekant med digitala varningssignaler och blir därför lättare offer.
                </p>
              </div>

              <div className="cyber-panel" style={{ borderLeft: '3px solid #EF4444' }}>
                <h3 className="heading-3 mb-2" style={{ fontSize: '1.125rem', color: '#EF4444' }}>3. Ökad ensamhet driver romantikbedrägerier</h3>
                <p className="body-medium" style={{ color: '#CBD5E1' }}>
                  Sociala medier och dejtingappar har skapat en miljö där människor söker kontakt online. Bedragare utnyttjar denna längtan efter gemenskap genom att bygga romantiska relationer under falska förespeglingar.
                </p>
              </div>

              <div className="cyber-panel" style={{ borderLeft: '3px solid #8B5CF6' }}>
                <h3 className="heading-3 mb-2" style={{ fontSize: '1.125rem', color: '#8B5CF6' }}>4. Kryptovaluta gör spårning svårare</h3>
                <p className="body-medium" style={{ color: '#CBD5E1' }}>
                  Bedragare föredrar betalningar i Bitcoin och andra kryptovalutor eftersom dessa är svårare att spåra och nästan omöjliga att återkalla. Detta gör det lättare för bedragare att fly med pengarna.
                </p>
              </div>
            </div>

            <div className="cyber-panel" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: '#10B981' }}>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <div>
                  <p className="body-medium" style={{ color: '#CBD5E1', fontWeight: 600 }}>
                    💡 Tips: Med TrustMyMessage kan du analysera misstänkta meddelanden med AI på sekunder.
                  </p>
                  <Link to="/verifiera-meddelande" className="body-small mt-2 inline-block hover:underline" style={{ color: '#10B981' }}>
                    Testa verktyget gratis →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="vanliga-typer" className="mb-16">
            <h2 className="heading-2 mb-6">De 6 vanligaste typerna av onlinebedrägerier</h2>
            <p className="body-medium mb-8" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
              Här är de mest förekommande bedrägerierna i Sverige och globalt under 2024-2025:
            </p>

            {/* Type 1 */}
            <div className="cyber-panel mb-6" style={{ borderLeft: '4px solid #EF4444' }}>
              <div className="flex items-start gap-4 mb-4">
                <Heart className="w-8 h-8 flex-shrink-0" style={{ color: '#EF4444', strokeWidth: 1.5 }} />
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#EF4444' }}>1. Romantikbedrägerier (Romance Scams)</h3>
                  <p className="body-medium mb-4" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
                    Bedragaren skapar en falsk profil på dejtingappar eller sociala medier, bygger en romantisk relation under veckor eller månader, och ber sedan om pengar för "nödsituationer" som aldrig tar slut.
                  </p>
                </div>
              </div>
              
              <div className="ml-12">
                <p className="body-small mb-2" style={{ color: '#F87171', fontWeight: 600 }}>Typiska varningssignaler:</p>
                <ul className="space-y-1">
                  <li className="body-small" style={{ color: '#FCA5A5' }}>• Snabb förälskelse och intensiva kärleksförklaringar inom dagar</li>
                  <li className="body-small" style={{ color: '#FCA5A5' }}>• Vägrar videosamtal eller fysiska möten (alltid ursäkter)</li>
                  <li className="body-small" style={{ color: '#FCA5A5' }}>• Påstår sig arbeta utomlands (ofta som läkare, ingenjör eller militär)</li>
                  <li className="body-small" style={{ color: '#FCA5A5' }}>• Ber om pengar för flygbiljetter, sjukvård eller "fastnat i tullen"</li>
                  <li className="body-small" style={{ color: '#FCA5A5' }}>• Vill flytta konversationen från dejtingapp till WhatsApp/Telegram snabbt</li>
                </ul>
                <p className="body-small mt-4" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  💔 Genomsnittlig förlust i Sverige: 185 000 kr (enligt Polisen, 2024)
                </p>
              </div>
            </div>

            {/* Type 2 */}
            <div className="cyber-panel mb-6" style={{ borderLeft: '4px solid #F59E0B' }}>
              <div className="flex items-start gap-4 mb-4">
                <DollarSign className="w-8 h-8 flex-shrink-0" style={{ color: '#F59E0B', strokeWidth: 1.5 }} />
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#F59E0B' }}>2. Investeringsbedrägerier</h3>
                  <p className="body-medium mb-4" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
                    Bedragare erbjuder "för bra för att vara sant"-investeringsmöjligheter i kryptovaluta, aktier, fastigheter eller andra tillgångar. Efter att du investerat försvinner pengarna och personen.
                  </p>
                </div>
              </div>
              
              <div className="ml-12">
                <p className="body-small mb-2" style={{ color: '#FBBF24', fontWeight: 600 }}>Typiska varningssignaler:</p>
                <ul className="space-y-1">
                  <li className="body-small" style={{ color: '#FCD34D' }}>• Löften om "garanterad avkastning" eller "riskfritt"</li>
                  <li className="body-small" style={{ color: '#FCD34D' }}>• Påstår att du måste agera nu för att inte missa möjligheten</li>
                  <li className="body-small" style={{ color: '#FCD34D' }}>• Dålig eller ingen reglering/registrering hos Finansinspektionen</li>
                  <li className="body-small" style={{ color: '#FCD34D' }}>• Ber dig investera via kryptovaluta eller gåvokort</li>
                  <li className="body-small" style={{ color: '#FCD34D' }}>• Visar "falska vinster" på en sida du inte kan ta ut pengar från</li>
                </ul>
                <p className="body-small mt-4" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  📊 Vanligaste former: Krypto-"handelsbots", forex-bluffar, ponzischeman
                </p>
              </div>
            </div>

            {/* Type 3 */}
            <div className="cyber-panel mb-6" style={{ borderLeft: '4px solid #3B82F6' }}>
              <div className="flex items-start gap-4 mb-4">
                <Mail className="w-8 h-8 flex-shrink-0" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#3B82F6' }}>3. Phishing-bedrägerier (E-post & SMS)</h3>
                  <p className="body-medium mb-4" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
                    Du får ett meddelande som ser ut att komma från din bank, Skatteverket, PostNord eller en annan pålitlig organisation. Målet är att få dig att klicka på en länk och ange känsliga uppgifter.
                  </p>
                </div>
              </div>
              
              <div className="ml-12">
                <p className="body-small mb-2" style={{ color: '#60A5FA', fontWeight: 600 }}>Typiska varningssignaler:</p>
                <ul className="space-y-1">
                  <li className="body-small" style={{ color: '#93C5FD' }}>• Felaktiga avsändaradresser (t.ex. "swe.dbank@mail.com" istället för "swedbank.se")</li>
                  <li className="body-small" style={{ color: '#93C5FD' }}>• Begär ditt BankID, lösenord eller PIN-kod</li>
                  <li className="body-small" style={{ color: '#93C5FD' }}>• Språkfel, konstiga formuleringar eller dålig översättning</li>
                  <li className="body-small" style={{ color: '#93C5FD' }}>• Skapar brådska ("ditt konto stängs inom 24 timmar")</li>
                  <li className="body-small" style={{ color: '#93C5FD' }}>• Länkar leder till webbplatser som inte matchar organisationen</li>
                </ul>
                <p className="body-small mt-4" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  ⚠️ Kom ihåg: Din bank ringer ALDRIG och ber om BankID eller lösenord
                </p>
              </div>
            </div>

            {/* Type 4 */}
            <div className="cyber-panel mb-6" style={{ borderLeft: '4px solid #8B5CF6' }}>
              <div className="flex items-start gap-4 mb-4">
                <Phone className="w-8 h-8 flex-shrink-0" style={{ color: '#8B5CF6', strokeWidth: 1.5 }} />
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#8B5CF6' }}>4. Falsk kundtjänst / Tech Support Scams</h3>
                  <p className="body-medium mb-4" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
                    Bedragaren ringer eller skickar meddelande och påstår sig vara från Microsoft, Apple, Google eller din internetleverantör. De säger att din dator är hackad eller att du har ett virus och ber om fjärråtkomst.
                  </p>
                </div>
              </div>
              
              <div className="ml-12">
                <p className="body-small mb-2" style={{ color: '#A78BFA', fontWeight: 600 }}>Typiska varningssignaler:</p>
                <ul className="space-y-1">
                  <li className="body-small" style={{ color: '#C4B5FD' }}>• Ringer oväntat och påstår att de upptäckt problem</li>
                  <li className="body-small" style={{ color: '#C4B5FD' }}>• Ber om fjärråtkomst till din dator (TeamViewer, AnyDesk)</li>
                  <li className="body-small" style={{ color: '#C4B5FD' }}>• Kräver betalning via gåvokort eller kryptovaluta</li>
                  <li className="body-small" style={{ color: '#C4B5FD' }}>• Använder skrämseltaktik ("alla dina filer kommer raderas")</li>
                  <li className="body-small" style={{ color: '#C4B5FD' }}>• Ber om inloggningsuppgifter till ditt bankkonto "för att återbetala"</li>
                </ul>
              </div>
            </div>

            {/* Type 5 */}
            <div className="cyber-panel mb-6" style={{ borderLeft: '4px solid #10B981' }}>
              <div className="flex items-start gap-4 mb-4">
                <MessageSquare className="w-8 h-8 flex-shrink-0" style={{ color: '#10B981', strokeWidth: 1.5 }} />
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#10B981' }}>5. Vänförfrågan-bedrägerier (Social Media Scams)</h3>
                  <p className="body-medium mb-4" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
                    Någon skapar en falsk profil som liknar en vän eller familjemedlem och ber om pengar, länkar till bluffar eller försöker få tillgång till ditt konto.
                  </p>
                </div>
              </div>
              
              <div className="ml-12">
                <p className="body-small mb-2" style={{ color: '#34D399', fontWeight: 600 }}>Typiska varningssignaler:</p>
                <ul className="space-y-1">
                  <li className="body-small" style={{ color: '#6EE7B7' }}>• Ny profil med få vänner eller följare</li>
                  <li className="body-small" style={{ color: '#6EE7B7' }}>• Skriver på ett konstigt sätt jämfört med den verkliga personen</li>
                  <li className="body-small" style={{ color: '#6EE7B7' }}>• Ber omedelbart om pengar för en "nödsituation"</li>
                  <li className="body-small" style={{ color: '#6EE7B7' }}>• Vill inte prata via telefon eller video</li>
                  <li className="body-small" style={{ color: '#6EE7B7' }}>• Skickar länkar till tävlingar, undersökningar eller investeringar</li>
                </ul>
                <p className="body-small mt-4" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  🔒 Tips: Aktivera tvåfaktorsautentisering på alla sociala medier
                </p>
              </div>
            </div>

            {/* Type 6 */}
            <div className="cyber-panel mb-6" style={{ borderLeft: '4px solid #EC4899' }}>
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-8 h-8 flex-shrink-0" style={{ color: '#EC4899', strokeWidth: 1.5 }} />
                <div>
                  <h3 className="heading-3 mb-2" style={{ color: '#EC4899' }}>6. "Varubedrägerier" (Fake Online Shops)</h3>
                  <p className="body-medium mb-4" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
                    Falska webbshoppar som säljer produkter till fantastiska priser men aldrig levererar varorna. Särskilt vanligt kring rea-perioder som Black Friday.
                  </p>
                </div>
              </div>
              
              <div className="ml-12">
                <p className="body-small mb-2" style={{ color: '#F472B6', fontWeight: 600 }}>Typiska varningssignaler:</p>
                <ul className="space-y-1">
                  <li className="body-small" style={{ color: '#F9A8D4' }}>• Priser som är 50-80% lägre än konkurrenterna</li>
                  <li className="body-small" style={{ color: '#F9A8D4' }}>• Ny domän registrerad för bara några månader sedan</li>
                  <li className="body-small" style={{ color: '#F9A8D4' }}>• Ingen fysisk adress eller bara utländsk adress</li>
                  <li className="body-small" style={{ color: '#F9A8D4' }}>• Kräver betalning via Swish, kryptovaluta eller direktöverföring</li>
                  <li className="body-small" style={{ color: '#F9A8D4' }}>• Produktbilder stulna från legitima butiker (sök med Google Reverse Image)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="varningssignaler" className="mb-16">
            <h2 className="heading-2 mb-6">10 universella varningssignaler</h2>
            <p className="body-medium mb-8" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
              Oavsett typ av bedrägeri finns det vissa gemensamma tecken du alltid bör vara uppmärksam på:
            </p>

            <div className="space-y-4">
              {[
                {
                  number: '1',
                  title: 'För bra för att vara sant',
                  description: 'Om ett erbjudande känns för generöst eller en person verkar för perfekt – lita på din magkänsla. Bedragare förlitar sig på att offer blir bländade av möjligheten.',
                  color: '#EF4444'
                },
                {
                  number: '2',
                  title: 'Brådska och tidspress',
                  description: '"Du måste agera nu", "erbjudandet går ut om 24 timmar", "jag behöver hjälp IDAG". Bedragare använder brådska för att hindra dig från att tänka klart och kontrollera fakta.',
                  color: '#F59E0B'
                },
                {
                  number: '3',
                  title: 'Begäran om pengar',
                  description: 'Särskilt om personen ber om betalning via kryptovaluta, gåvokort, Western Union eller direktöverföring – metoder som är svåra att spåra och återkalla.',
                  color: '#EF4444'
                },
                {
                  number: '4',
                  title: 'Vägrar videosamtal',
                  description: 'I romantikbedrägerier är detta den största varningssignalen. Om personen alltid har ursäkter för att inte visa sitt ansikte – kamera trasig, dålig uppkoppling, "för blyg" – är det troligen bedrägeri.',
                  color: '#EC4899'
                },
                {
                  number: '5',
                  title: 'Dålig grammatik och stavning',
                  description: 'Många bedragare arbetar från länder där svenska inte är modersmål. Meddelanden översatta med Google Translate har ofta konstiga formuleringar och grammatiska fel.',
                  color: '#3B82F6'
                },
                {
                  number: '6',
                  title: 'Begär personliga uppgifter',
                  description: 'Legitima organisationer frågar ALDRIG efter lösenord, PIN-koder, BankID eller fullständiga kortuppgifter via e-post, SMS eller telefon.',
                  color: '#EF4444'
                },
                {
                  number: '7',
                  title: 'Emotionell manipulation',
                  description: 'Bedragare spelar på känslor – kärlek, rädsla, girighet, skuld. De berättar tragiska historier eller målar upp fantastiska möjligheter för att få dig att agera emotionellt istället för rationellt.',
                  color: '#8B5CF6'
                },
                {
                  number: '8',
                  title: 'Oombedd kontakt',
                  description: 'Legitima företag och myndigheter kontaktar dig sällan oväntat via e-post eller telefon och ber om åtgärder. Var extra försiktig med oväntade meddelanden.',
                  color: '#F59E0B'
                },
                {
                  number: '9',
                  title: 'Inkonsekvenser i historien',
                  description: 'Om personens berättelse förändras över tid, om detaljer inte stämmer eller om de undviker vissa frågor – detta är ofta tecken på lögner.',
                  color: '#10B981'
                },
                {
                  number: '10',
                  title: 'Kräver sekretess',
                  description: '"Berätta inte för någon om detta", "detta är vår hemlighet". Bedragare vet att om du berättar för vänner eller familj kommer de att varna dig.',
                  color: '#EF4444'
                }
              ].map((signal, index) => (
                <div key={index} className="cyber-panel" style={{ borderLeft: `4px solid ${signal.color}` }}>
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                      style={{ background: signal.color, color: '#0F172A' }}
                    >
                      {signal.number}
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2" style={{ fontSize: '1.125rem', color: signal.color }}>
                        {signal.title}
                      </h3>
                      <p className="body-medium" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                        {signal.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="psykologi" className="mb-16">
            <h2 className="heading-2 mb-6">Psykologiska taktiker bedragare använder</h2>
            <p className="body-medium mb-8" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
              Bedragare är experter på mänsklig psykologi. Här är de vanligaste manipulationstaktikerna:
            </p>

            <div className="space-y-6">
              <div className="cyber-panel">
                <h3 className="heading-3 mb-3" style={{ color: '#10B981' }}>Reciprocitet (Ömsesidighet)</h3>
                <p className="body-medium mb-3" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  Bedragaren ger dig något först – uppmärksamhet, komplimanger, "insiderinformation" – så att du känner dig skyldig att ge något tillbaka (ofta pengar).
                </p>
                <p className="body-small" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  Exempel: "Jag har delat så mycket med dig, nu behöver jag bara lite hjälp..."
                </p>
              </div>

              <div className="cyber-panel">
                <h3 className="heading-3 mb-3" style={{ color: '#3B82F6' }}>Auktoritet</h3>
                <p className="body-medium mb-3" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  De låtsas vara någon i maktposition – polisen, skattemyndigheten, banken, en advokat. Vi är programmerade att lyda auktoriteter, vilket bedragare utnyttjar.
                </p>
                <p className="body-small" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  Exempel: "Detta är Skatteverket. Du har obetalda skatter och måste betala omedelbart."
                </p>
              </div>

              <div className="cyber-panel">
                <h3 className="heading-3 mb-3" style={{ color: '#F59E0B' }}>Knapphet & Brådska</h3>
                <p className="body-medium mb-3" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  "Bara 2 platser kvar", "erbjudandet går ut om 1 timme". Skapar artificiell brådska så att du inte hinner tänka eller söka information.
                </p>
                <p className="body-small" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  Exempel: "Detta är en tidsbegränsad investering – du måste besluta nu!"
                </p>
              </div>

              <div className="cyber-panel">
                <h3 className="heading-3 mb-3" style={{ color: '#EC4899' }}>Social proof (Socialt bevis)</h3>
                <p className="body-medium mb-3" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  De visar "bevis" på att andra redan köpt, investerat eller deltagit. Falska recensioner, fejkade skärmdumpar av vinster, påhittade vittnesmål.
                </p>
                <p className="body-small" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  Exempel: "Hundratals svenskar har redan tjänat miljoner på detta!"
                </p>
              </div>

              <div className="cyber-panel">
                <h3 className="heading-3 mb-3" style={{ color: '#8B5CF6' }}>Love Bombing</h3>
                <p className="body-medium mb-3" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  I romantikbedrägerier överväldigar de dig med kärlek och uppmärksamhet från dag ett. "Du är min själsfrände", "jag har väntat på dig hela mitt liv". Detta skapar stark emotionell koppling snabbt.
                </p>
                <p className="body-small" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  Exempel: "Jag älskar dig så mycket. Du är den enda som förstår mig."
                </p>
              </div>
            </div>

            <div className="cyber-panel mt-8" style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: '#EF4444' }}>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
                <div>
                  <p className="body-medium" style={{ color: '#FCA5A5', fontWeight: 600 }}>
                    Viktigt att komma ihåg:
                  </p>
                  <p className="body-medium mt-2" style={{ color: '#CBD5E1' }}>
                    Att bli lurad betyder INTE att du är dum. Bedragare är professionella manipulatörer som studerar psykologi och har perfektionerat sina metoder under år. Alla kan bli offer – även smarta, erfarna människor.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="skydda-dig" className="mb-16">
            <h2 className="heading-2 mb-6">Hur skyddar du dig?</h2>
            <p className="body-medium mb-8" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
              Här är konkreta steg du kan ta för att minska risken att bli lurad:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="cyber-panel">
                <CheckCircle className="w-8 h-8 mb-3" style={{ color: '#10B981', strokeWidth: 1.5 }} />
                <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Verifiera identiteter</h3>
                <ul className="space-y-2">
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Sök på personens namn och bilder med Google</li>
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Kräv videosamtal innan du litar på någon online</li>
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Ring företag tillbaka på officiella nummer (inte numret de gav dig)</li>
                </ul>
              </div>

              <div className="cyber-panel">
                <CheckCircle className="w-8 h-8 mb-3" style={{ color: '#10B981', strokeWidth: 1.5 }} />
                <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Skydda dina uppgifter</h3>
                <ul className="space-y-2">
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Aktivera tvåfaktorsautentisering överallt</li>
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Använd unika lösenord för varje tjänst</li>
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Dela aldrig BankID, PIN-koder eller lösenord</li>
                </ul>
              </div>

              <div className="cyber-panel">
                <CheckCircle className="w-8 h-8 mb-3" style={{ color: '#10B981', strokeWidth: 1.5 }} />
                <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Ta det lugnt</h3>
                <ul className="space-y-2">
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Agera aldrig under tidspress</li>
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Prata med någon du litar på innan stora beslut</li>
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Sov på saken innan du skickar pengar</li>
                </ul>
              </div>

              <div className="cyber-panel">
                <CheckCircle className="w-8 h-8 mb-3" style={{ color: '#10B981', strokeWidth: 1.5 }} />
                <h3 className="heading-3 mb-3" style={{ fontSize: '1.125rem' }}>Använd verktyg</h3>
                <ul className="space-y-2">
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Använd TrustMyMessage för att analysera meddelanden</li>
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Kolla domänålder på who.is för webbshoppar</li>
                  <li className="body-medium" style={{ color: '#CBD5E1' }}>• Sök efter recensioner och varningar online</li>
                </ul>
              </div>
            </div>

            <div className="cyber-panel mt-8" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: '#10B981' }}>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                <div>
                  <p className="body-medium mb-3" style={{ color: '#CBD5E1', fontWeight: 600 }}>
                    🛡️ Använd TrustMyMessage för omedelbart skydd
                  </p>
                  <p className="body-medium mb-4" style={{ color: '#CBD5E1' }}>
                    Ladda upp en skärmdump av ett misstänkt meddelande och få AI-driven analys på sekunder. Helt gratis, ingen registrering krävs.
                  </p>
                  <Link to="/verifiera-meddelande" className="btn-primary">
                    Analysera meddelande nu
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="vad-gora" className="mb-16">
            <h2 className="heading-2 mb-6">Vad ska du göra om du blivit lurad?</h2>
            <p className="body-medium mb-8" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
              Om du misstänker att du blivit offer för bedrägeri – agera SNABBT:
            </p>

            <div className="space-y-4">
              <div className="cyber-panel" style={{ borderLeft: '4px solid #EF4444' }}>
                <h3 className="heading-3 mb-3" style={{ color: '#EF4444' }}>1. Stoppa all kontakt & betalningar</h3>
                <p className="body-medium" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  Avbryt omedelbart all kommunikation med bedragaren. Skicka inga fler pengar, även om de säger att "nästa betalning löser allt". Blockera personen på alla plattformar.
                </p>
              </div>

              <div className="cyber-panel" style={{ borderLeft: '4px solid #F59E0B' }}>
                <h3 className="heading-3 mb-3" style={{ color: '#F59E0B' }}>2. Kontakta din bank OMEDELBART</h3>
                <p className="body-medium mb-3" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  Ring din bank och förklara situationen. Om transaktionen skedde nyligen kan de eventuellt stoppa eller återkalla betalningen. Be om att spärra ditt kort och konto om nödvändigt.
                </p>
                <p className="body-small" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                  💡 Tips: Ju snabbare du agerar, desto större chans att få tillbaka pengarna
                </p>
              </div>

              <div className="cyber-panel" style={{ borderLeft: '4px solid #3B82F6' }}>
                <h3 className="heading-3 mb-3" style={{ color: '#3B82F6' }}>3. Polisanmäl</h3>
                <p className="body-medium mb-3" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  Gör en polisanmälan på polisen.se eller ring 114 14. Även om chansen att få tillbaka pengarna är liten hjälper anmälan polisen att kartlägga bedrägerier och eventuellt stoppa fler brott.
                </p>
                <p className="body-small" style={{ color: '#94A3B8' }}>
                  Ha med: Screenshots av konversationer, banktransaktioner, e-postadresser, telefonnummer
                </p>
              </div>

              <div className="cyber-panel" style={{ borderLeft: '4px solid #8B5CF6' }}>
                <h3 className="heading-3 mb-3" style={{ color: '#8B5CF6' }}>4. Dokumentera allt</h3>
                <p className="body-medium" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  Spara alla meddelanden, e-post, transaktionskvitton och annan kommunikation. Ta screenshots innan du blockerar personen. Detta är viktigt för polisanmälan och eventuell försäkringsskadeanmälan.
                </p>
              </div>

              <div className="cyber-panel" style={{ borderLeft: '4px solid #10B981' }}>
                <h3 className="heading-3 mb-3" style={{ color: '#10B981' }}>5. Sök stöd</h3>
                <p className="body-medium mb-3" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  Att bli lurad kan vara traumatiskt. Prata med vänner, familj eller en professionell. Många känner skam, men kom ihåg – det är inte ditt fel.
                </p>
                <p className="body-small" style={{ color: '#94A3B8' }}>
                  📞 Brottsofferjouren: 116 006 (gratis stödtelefon)
                </p>
              </div>

              <div className="cyber-panel" style={{ borderLeft: '4px solid #EC4899' }}>
                <h3 className="heading-3 mb-3" style={{ color: '#EC4899' }}>6. Varna andra</h3>
                <p className="body-medium" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                  Rapportera bedrägaren på plattformen där ni träffades (Facebook, Tinder, etc.). Dela din erfarenhet (anonymt om du vill) för att varna andra. Ditt mod kan rädda någon annan från samma öde.
                </p>
              </div>
            </div>

            <div className="cyber-panel mt-8" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: '#10B981' }}>
              <h3 className="heading-3 mb-3" style={{ color: '#10B981' }}>Viktiga kontakter</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="body-small" style={{ color: '#10B981', fontWeight: 600 }}>Polisanmälan:</p>
                  <p className="body-small" style={{ color: '#CBD5E1' }}>polisen.se eller 114 14</p>
                </div>
                <div>
                  <p className="body-small" style={{ color: '#10B981', fontWeight: 600 }}>Brottsofferjouren:</p>
                  <p className="body-small" style={{ color: '#CBD5E1' }}>116 006 (gratis)</p>
                </div>
                <div>
                  <p className="body-small" style={{ color: '#10B981', fontWeight: 600 }}>Konsumentverket:</p>
                  <p className="body-small" style={{ color: '#CBD5E1' }}>hallakonsument.se</p>
                </div>
                <div>
                  <p className="body-small" style={{ color: '#10B981', fontWeight: 600 }}>Swedbank (bedrägerihjälp):</p>
                  <p className="body-small" style={{ color: '#CBD5E1' }}>08-58 59 59 59</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="cyber-panel" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15))', borderColor: '#10B981' }}>
              <h2 className="heading-2 mb-4">Sammanfattning</h2>
              <p className="body-medium mb-4" style={{ color: '#CBD5E1', lineHeight: '1.8' }}>
                Digitala bedrägerier ökar varje år, men med rätt kunskap kan du skydda dig själv och dina nära och kära. Kom ihåg dessa tre grundregler:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>
                    <strong style={{ color: '#10B981' }}>Lita på din magkänsla.</strong> Om något känns fel, är det troligen det.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>
                    <strong style={{ color: '#10B981' }}>Ta det lugnt.</strong> Agera aldrig under tidspress. Äkta erbjudanden kan vänta.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#10B981' }} />
                  <span className="body-medium" style={{ color: '#CBD5E1' }}>
                    <strong style={{ color: '#10B981' }}>Verifiera alltid.</strong> Använd verktyg som TrustMyMessage för att analysera misstänkta meddelanden.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/verifiera-meddelande" className="btn-primary">
                  <Shield className="w-5 h-5" />
                  Verifiera meddelande gratis
                </Link>
                <Link to="/" className="btn-secondary">
                  Tillbaka till startsidan
                </Link>
              </div>
            </div>
          </section>

          {/* Author & Share */}
          <div className="border-t pt-8" style={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}>
            <p className="body-small text-center" style={{ color: '#94A3B8' }}>
              Publicerad av TrustMyMessage Team • Januari 2025
            </p>
            <p className="body-small text-center mt-2" style={{ color: '#94A3B8' }}>
              Dela den här guiden för att hjälpa andra skydda sig från bedrägerier.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogBedrageriguide2025;

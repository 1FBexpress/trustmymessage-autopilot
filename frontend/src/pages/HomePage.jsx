import React from 'react';
import { Shield, CheckCircle, Users, Target, Heart, Share2, Lock, User, AlertTriangle, XCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import Scanner from '../components/Scanner';

const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ background: '#0F172A' }}>
      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6" style={{ color: '#10B981', strokeWidth: 2 }} />
          <span className="text-xl font-bold" style={{ color: '#F1F5F9' }}>TrustMyMsg</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#scanner" className="nav-link">Scan Message</a>
          <a href="#mission" className="nav-link">Mission</a>
          <a href="#support" className="nav-link">Support</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#support" className="btn-primary" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>
            Support Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Shield className="w-20 h-20" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <div className="absolute inset-0" style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.4)', borderRadius: '50%' }}></div>
            </div>
          </div>
          <h1 className="heading-1 mb-6">
            Verify Any Message — Instantly
          </h1>
          <p className="body-large mb-8" style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
            Upload a screenshot. AI checks for scams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#scanner" className="btn-primary glow-pulse">
              Scan Now
            </a>
            <a href="#support" className="btn-secondary">
              Support the Mission
            </a>
          </div>
        </div>
      </section>

      {/* Scanner Section */}
      <section id="scanner" className="py-16 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Upload & Scan</h2>
            <p className="body-large" style={{ color: '#94A3B8' }}>
              Drop a screenshot of any suspicious message and let AI analyze it for scam indicators.
            </p>
          </div>
          
          {/* Scanner Component */}
          <Scanner />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why We Exist</h2>
            <p className="body-large max-w-3xl mx-auto" style={{ color: '#CBD5E1' }}>
              Romance scams, crypto fraud, phishing attempts, and fake friend requests are on the rise. 
              Vulnerable people lose thousands every day. TrustMyMsg uses AI to fight back — giving everyone 
              a free tool to verify suspicious messages before it's too late.
            </p>
          </div>

          {/* Founder Quote Card */}
          <div className="cyber-panel max-w-3xl mx-auto mt-12" style={{ borderLeft: '4px solid #10B981' }}>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="founder-photo flex-shrink-0">
                <div className="w-24 h-24 rounded-full flex items-center justify-center" 
                     style={{ background: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10B981' }}>
                  <User className="w-12 h-12" style={{ color: '#10B981', strokeWidth: 1.5 }} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="body-large mb-4" style={{ fontStyle: 'italic', color: '#E2E8F0' }}>
                  "Too many people have lost money, dignity, and trust to scammers. TrustMyMsg is my way of fighting back."
                </p>
                <p className="body-medium" style={{ fontWeight: 600, color: '#10B981' }}>— CH, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-panel text-center">
              <CheckCircle className="w-10 h-10 mx-auto mb-4" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <div className="text-5xl font-bold mb-2" style={{ color: '#10B981' }}>128</div>
              <p className="body-medium" style={{ color: '#94A3B8' }}>Scans Performed</p>
            </div>
            <div className="cyber-panel text-center">
              <Shield className="w-10 h-10 mx-auto mb-4" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
              <div className="text-5xl font-bold mb-2" style={{ color: '#3B82F6' }}>47</div>
              <p className="body-medium" style={{ color: '#94A3B8' }}>Scams Detected</p>
            </div>
            <div className="cyber-panel text-center">
              <Users className="w-10 h-10 mx-auto mb-4" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <div className="text-5xl font-bold mb-2" style={{ color: '#10B981' }}>36</div>
              <p className="body-medium" style={{ color: '#94A3B8' }}>Early Supporters</p>
            </div>
            <div className="cyber-panel text-center">
              <Target className="w-10 h-10 mx-auto mb-4" style={{ color: '#3B82F6', strokeWidth: 1.5 }} />
              <div className="text-5xl font-bold mb-2" style={{ color: '#F59E0B' }}>10,000</div>
              <p className="body-medium" style={{ color: '#94A3B8' }}>Protection Goal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support / Crowdfund Section */}
      <section id="support" className="py-16 px-6" style={{ background: '#0F172A' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 mx-auto mb-6" style={{ color: '#10B981', strokeWidth: 1.5 }} />
            <h2 className="heading-2 mb-4">Support the Mission</h2>
            <p className="body-large mb-2" style={{ color: '#CBD5E1' }}>
              If you believe people deserve protection online, help us grow.
            </p>
            <p className="body-small" style={{ color: '#94A3B8', fontStyle: 'italic' }}>
              Every £5 helps us protect more people from scams.
            </p>
          </div>

          {/* Donation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="STRIPE_LINK_TIER_1" className="donate-btn btn-secondary">
              £5 / $5 Support
            </a>
            <a href="STRIPE_LINK_TIER_2" className="donate-btn btn-secondary">
              £10 / $10 Support
            </a>
            <a href="STRIPE_LINK_TIER_3" className="donate-btn btn-secondary">
              £25 / $25 Support
            </a>
          </div>

          {/* Share Buttons */}
          <div className="text-center">
            <p className="body-medium mb-4" style={{ color: '#94A3B8' }}>Or share this project:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="TWITTER_SHARE_LINK" className="btn-secondary flex items-center justify-center gap-2" style={{ fontSize: '0.9rem' }}>
                <Share2 className="w-4 h-4" />
                Share on Twitter
              </a>
              <a href="FACEBOOK_SHARE_LINK" className="btn-secondary flex items-center justify-center gap-2" style={{ fontSize: '0.9rem' }}>
                <Share2 className="w-4 h-4" />
                Share on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6" style={{ background: '#1E293B' }}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="cyber-panel" style={{ border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <AccordionTrigger className="text-left hover:no-underline px-6 py-4">
                <span className="heading-3" style={{ fontSize: '1.125rem' }}>How does the AI detect scams?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="body-medium px-6 pb-4" style={{ color: '#CBD5E1' }}>
                  TrustMyMsg uses advanced AI language models to analyze message patterns, urgency tactics, 
                  common scam phrases, suspicious requests for money or personal information, and inconsistencies 
                  in sender behavior. The AI has been trained on thousands of known scam examples to identify 
                  red flags that humans might miss.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="cyber-panel" style={{ border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <AccordionTrigger className="text-left hover:no-underline px-6 py-4">
                <span className="heading-3" style={{ fontSize: '1.125rem' }}>Is my uploaded image stored?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="body-medium px-6 pb-4" style={{ color: '#CBD5E1' }}>
                  No. We process your image in real-time and do not store it on our servers. Your privacy is 
                  paramount — the image is analyzed, the results are returned to you, and then it's discarded. 
                  We only keep anonymous statistics (like "scans performed") to track our impact.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="cyber-panel" style={{ border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <AccordionTrigger className="text-left hover:no-underline px-6 py-4">
                <span className="heading-3" style={{ fontSize: '1.125rem' }}>Who created TrustMyMsg?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="body-medium px-6 pb-4" style={{ color: '#CBD5E1' }}>
                  TrustMyMsg was created by CH, a developer who witnessed too many people fall victim to online 
                  scams. Frustrated by how easy it is for scammers to exploit vulnerable individuals, CH built 
                  this tool as a free public resource to help people verify suspicious messages before it's too late.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ background: '#0F172A', borderTop: '1px solid rgba(59, 130, 246, 0.2)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <span className="body-medium" style={{ fontWeight: 600, color: '#F1F5F9' }}>TrustMyMsg</span>
            </div>
            <p className="body-small text-center" style={{ color: '#94A3B8' }}>
              © 2025 TrustMyMsg. Protecting people from online scams.
            </p>
            <div className="flex gap-6">
              <a href="#" className="body-small" style={{ color: '#94A3B8', textDecoration: 'underline' }}>Terms</a>
              <a href="#" className="body-small" style={{ color: '#94A3B8', textDecoration: 'underline' }}>Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
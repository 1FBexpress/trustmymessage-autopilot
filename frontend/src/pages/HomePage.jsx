import React from 'react';
import { Shield, CheckCircle, Users, Target, Heart, Share2, Lock, User } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import Scanner from '../components/Scanner';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="flex items-center gap-2">
          <div className="logo-placeholder">
            <span className="text-xl font-bold" style={{ color: '#2563eb' }}>TrustMyMsg</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#scanner" className="nav-link">Scan Message</a>
          <a href="#mission" className="nav-link">Mission</a>
          <a href="#support" className="nav-link">Support</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#support" className="btn-primary">
            Support Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16" style={{ color: '#2563eb', strokeWidth: 1.5 }} />
          </div>
          <h1 className="hero-title">
            TrustMyMsg — Verify Any Message With AI
          </h1>
          <p className="hero-subtitle">
            Not sure if a message is real or a scam? Upload it — AI verifies it instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#scanner" className="btn-primary">
              Scan a Message
            </a>
            <a href="#support" className="btn-secondary">
              Support the Mission
            </a>
          </div>
        </div>
      </section>

      {/* Scanner Section */}
      <section id="scanner" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Upload & Scan</h2>
            <p className="body-large" style={{ color: 'rgb(131, 146, 140)' }}>
              Drop a screenshot of any suspicious message and let AI analyze it for scam indicators.
            </p>
          </div>
          
          {/* Scanner Component */}
          <Scanner />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 px-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why We Exist</h2>
            <p className="body-large max-w-3xl mx-auto" style={{ color: 'rgb(14, 15, 12)' }}>
              Romance scams, crypto fraud, phishing attempts, and fake friend requests are on the rise. 
              Vulnerable people lose thousands every day. TrustMyMsg uses AI to fight back — giving everyone 
              a free tool to verify suspicious messages before it's too late.
            </p>
          </div>

          {/* Founder Quote Card */}
          <div className="product-card max-w-3xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="founder-photo flex-shrink-0">
                <div className="w-24 h-24 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', border: '2px solid rgba(37, 99, 235, 0.2)' }}>
                  <User className="w-12 h-12" style={{ color: '#2563eb', strokeWidth: 1.5 }} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="body-large mb-4" style={{ fontStyle: 'italic', color: 'rgb(14, 15, 12)' }}>
                  "Too many people have lost money, dignity, and trust to scammers. TrustMyMsg is my way of fighting back."
                </p>
                <p className="body-medium" style={{ fontWeight: 600, color: 'rgb(0, 55, 32)' }}>— CH, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="ai-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <div className="product-card text-center">
              <CheckCircle className="w-10 h-10 mx-auto mb-4" style={{ color: '#10b981', strokeWidth: 1.5 }} />
              <div className="heading-2 mb-2" style={{ color: '#2563eb' }}>128</div>
              <p className="body-medium" style={{ color: 'rgb(131, 146, 140)' }}>Scans Performed</p>
            </div>
            <div className="product-card text-center">
              <Shield className="w-10 h-10 mx-auto mb-4" style={{ color: '#2563eb', strokeWidth: 1.5 }} />
              <div className="heading-2 mb-2" style={{ color: '#10b981' }}>47</div>
              <p className="body-medium" style={{ color: 'rgb(131, 146, 140)' }}>Scams Detected</p>
            </div>
            <div className="product-card text-center">
              <Users className="w-10 h-10 mx-auto mb-4" style={{ color: '#10b981', strokeWidth: 1.5 }} />
              <div className="heading-2 mb-2" style={{ color: '#2563eb' }}>36</div>
              <p className="body-medium" style={{ color: 'rgb(131, 146, 140)' }}>Early Supporters</p>
            </div>
            <div className="product-card text-center">
              <Target className="w-10 h-10 mx-auto mb-4" style={{ color: '#2563eb', strokeWidth: 1.5 }} />
              <div className="heading-2 mb-2" style={{ color: '#10b981' }}>10,000</div>
              <p className="body-medium" style={{ color: 'rgb(131, 146, 140)' }}>Protection Goal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support / Crowdfund Section */}
      <section id="support" className="py-16 px-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 mx-auto mb-6" style={{ color: '#10b981', strokeWidth: 1.5 }} />
            <h2 className="heading-2 mb-4">Support the Mission</h2>
            <p className="body-large" style={{ color: 'rgb(14, 15, 12)' }}>
              If you believe people deserve protection online, help us grow. Every contribution helps us detect more scams and protect more people.
            </p>
          </div>

          {/* Donation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="STRIPE_LINK_TIER_1" className="donate-btn btn-primary">
              £5 / $5 Support
            </a>
            <a href="STRIPE_LINK_TIER_2" className="donate-btn btn-primary">
              £10 / $10 Support
            </a>
            <a href="STRIPE_LINK_TIER_3" className="donate-btn btn-primary">
              £25 / $25 Support
            </a>
          </div>

          {/* Share Buttons */}
          <div className="text-center">
            <p className="body-medium mb-4" style={{ color: 'rgb(131, 146, 140)' }}>Or share this project:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="TWITTER_SHARE_LINK" className="btn-secondary flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Share on Twitter
              </a>
              <a href="FACEBOOK_SHARE_LINK" className="btn-secondary flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Share on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="product-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="heading-3">How does the AI detect scams?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="body-medium pt-4" style={{ color: 'rgb(14, 15, 12)' }}>
                  TrustMyMsg uses advanced AI language models to analyze message patterns, urgency tactics, 
                  common scam phrases, suspicious requests for money or personal information, and inconsistencies 
                  in sender behavior. The AI has been trained on thousands of known scam examples to identify 
                  red flags that humans might miss.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="product-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="heading-3">Is my uploaded image stored?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="body-medium pt-4" style={{ color: 'rgb(14, 15, 12)' }}>
                  No. We process your image in real-time and do not store it on our servers. Your privacy is 
                  paramount — the image is analyzed, the results are returned to you, and then it's discarded. 
                  We only keep anonymous statistics (like "scans performed") to track our impact.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="product-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="heading-3">Who created TrustMyMsg?</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="body-medium pt-4" style={{ color: 'rgb(14, 15, 12)' }}>
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
      <footer className="py-12 px-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" style={{ color: '#2563eb', strokeWidth: 1.5 }} />
              <span className="body-medium" style={{ fontWeight: 600, color: 'rgb(0, 55, 32)' }}>TrustMyMsg</span>
            </div>
            <p className="body-small" style={{ color: 'rgb(131, 146, 140)' }}>
              © 2025 TrustMyMsg. Protecting people from online scams.
            </p>
            <div className="flex gap-6">
              <a href="#" className="link-text body-small">Terms</a>
              <a href="#" className="link-text body-small">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
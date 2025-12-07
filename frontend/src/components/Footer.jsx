import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6" style={{ background: '#0F172A', borderTop: '1px solid rgba(59, 130, 246, 0.2)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" style={{ color: '#10B981', strokeWidth: 1.5 }} />
              <span className="text-xl font-bold" style={{ color: '#F1F5F9' }}>TrustMyMessage</span>
            </div>
            <p className="body-small" style={{ color: '#94A3B8', maxWidth: '400px' }}>
              Skyddar människor från digitala bedrägerier med AI-driven meddelandeverifiering.
            </p>
          </div>
          
          {/* Column 2 - Navigation */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#F1F5F9' }}>Snabblänkar</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="body-small hover:text-green-500 transition" style={{ color: '#94A3B8' }}>
                Hem
              </Link>
              <Link to="/verifiera-meddelande" className="body-small hover:text-green-500 transition" style={{ color: '#94A3B8' }}>
                Verifiera meddelande
              </Link>
              <Link to="/ai-bedrageriskydd" className="body-small hover:text-green-500 transition" style={{ color: '#94A3B8' }}>
                AI-bedrägeriskydd
              </Link>
              <Link to="/blog/hur-kanner-man-igen-bedragare-online-2025" className="body-small hover:text-green-500 transition" style={{ color: '#94A3B8' }}>
                Bedrägeriguide 2025
              </Link>
            </div>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#F1F5F9' }}>Juridiskt</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="body-small hover:text-green-500 transition" style={{ color: '#94A3B8' }}>
                Användarvillkor
              </a>
              <a href="#" className="body-small hover:text-green-500 transition" style={{ color: '#94A3B8' }}>
                Integritetspolicy
              </a>
              <a href="#" className="body-small hover:text-green-500 transition" style={{ color: '#94A3B8' }}>
                Cookie-policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(59, 130, 246, 0.2)' }}>
          <p className="body-small text-center" style={{ color: '#94A3B8' }}>
            © 2025 TrustMyMessage. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

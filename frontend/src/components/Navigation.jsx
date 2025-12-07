import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <Shield className="w-7 h-7" style={{ color: '#10B981', strokeWidth: 2 }} />
          <span className="text-2xl font-bold" style={{ color: '#F1F5F9' }}>TrustMyMessage</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'text-green-500' : ''}`}
          >
            Hem
          </Link>
          <Link 
            to="/verifiera-meddelande" 
            className={`nav-link ${isActive('/verifiera-meddelande') ? 'text-green-500' : ''}`}
          >
            Verifiera meddelande
          </Link>
          <Link 
            to="/ai-bedrageriskydd" 
            className={`nav-link ${isActive('/ai-bedrageriskydd') ? 'text-green-500' : ''}`}
          >
            AI-bedrägeriskydd
          </Link>
          <Link 
            to="/blog/hur-kanner-man-igen-bedragare-online-2025" 
            className={`nav-link ${isActive('/blog/hur-kanner-man-igen-bedragare-online-2025') ? 'text-green-500' : ''}`}
          >
            Guide 2025
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: '#10B981' }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-blue-500/20 py-4">
          <div className="flex flex-col gap-2 px-6">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-green-500' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Hem
            </Link>
            <Link 
              to="/verifiera-meddelande" 
              className={`nav-link ${isActive('/verifiera-meddelande') ? 'text-green-500' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Verifiera meddelande
            </Link>
            <Link 
              to="/ai-bedrageriskydd" 
              className={`nav-link ${isActive('/ai-bedrageriskydd') ? 'text-green-500' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              AI-bedrägeriskydd
            </Link>
            <Link 
              to="/blog/hur-kanner-man-igen-bedragare-online-2025" 
              className={`nav-link ${isActive('/blog/hur-kanner-man-igen-bedragare-online-2025') ? 'text-green-500' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Guide 2025
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

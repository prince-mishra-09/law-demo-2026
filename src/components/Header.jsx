import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { navLinks } from '../data/navigation';
import { firmInfo } from '../data/firmInfo';

export default function Header({ onOpenDisclaimer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/25 py-3'
          : 'bg-ivory border-b border-charcoal/10 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            aria-label="Veritas Legal Chambers Home"
          >
            <span className="font-serif text-lg sm:text-xl lg:text-[1.35rem] font-bold tracking-[0.16em] text-navy uppercase leading-tight group-hover:text-gold-dark transition-colors duration-200">
              VERITAS
            </span>
            <span className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.24em] uppercase text-gold font-semibold mt-0.5">
              LEGAL CHAMBERS &bull; NEW DELHI
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Primary Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-1.5 text-xs lg:text-[13px] tracking-wide font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-navy font-semibold'
                      : 'text-charcoal/80 hover:text-navy'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {/* Subtle gold underline on active or hover */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ease-out ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Subtle Regulatory Notice trigger button */}
            <button
              onClick={onOpenDisclaimer}
              className="hidden lg:inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-secondary hover:text-navy border border-charcoal/20 hover:border-gold px-2.5 py-1 transition-colors"
              title="View Bar Council of India Regulatory Disclaimer"
            >
              <ShieldCheck className="w-3 h-3 text-gold" />
              <span>Disclaimer</span>
            </button>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-navy hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-50 bg-navy/60 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto h-[calc(100vh-60px)] bg-ivory flex flex-col border-l border-gold/30 shadow-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <div className="pb-4 mb-6 border-b border-gold/20 flex justify-between items-center">
              <div>
                <p className="font-serif font-bold text-navy tracking-widest text-sm uppercase">VERITAS</p>
                <p className="text-[9px] text-gold tracking-widest uppercase">LEGAL CHAMBERS</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-charcoal hover:text-navy"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div> */}

            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {navLinks.map((item, idx) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-2 text-sm font-sans tracking-wide transition-colors ${
                      isActive
                        ? 'text-navy font-semibold border-b border-gold'
                        : 'text-charcoal hover:text-navy border-b border-charcoal/10'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-gold font-mono">0{idx + 1}</span>
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-charcoal/10">
              <p className="text-xs uppercase tracking-widest-caps text-gold font-semibold mb-2">
                New Delhi Chambers
              </p>
              <p className="text-xs text-charcoal/80 leading-relaxed">
                Delhi High Court Complex<br />
                Sher Shah Road, New Delhi – 110503
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-navy font-medium">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>{firmInfo.contact.phonePrimary}</span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDisclaimer();
                }}
                className="mt-6 w-full py-2 text-center text-xs tracking-wider uppercase border border-gold/50 text-navy hover:bg-gold/10 transition-colors"
              >
                Regulatory Disclaimer (BCI)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


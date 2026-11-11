import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageMeta from './components/PageMeta';
import DisclaimerModal from './components/DisclaimerModal';
import PrivacyModal from './components/PrivacyModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Advocates from './pages/Advocates';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';

// Minimal 404 Fallback
function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-ivory px-4 py-20 text-center">
      <div className="max-w-md space-y-4">
        <span className="text-xs font-mono text-gold tracking-widest uppercase">404 &bull; RECORD NOT FOUND</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-navy">Page Not Found</h1>
        <p className="text-sm text-secondary font-sans leading-relaxed">
          The requested page could not be located in the Veritas Legal Chambers directory.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest-caps bg-navy text-ivory hover:bg-navy-light transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the BCI disclaimer in this session
    const hasAcknowledged = sessionStorage.getItem('vlc_bci_disclaimer_accepted');
    if (!hasAcknowledged) {
      setIsFirstVisit(true);
      setIsDisclaimerOpen(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    sessionStorage.setItem('vlc_bci_disclaimer_accepted', 'true');
    setIsDisclaimerOpen(false);
    setIsFirstVisit(false);
  };

  const handleOpenDisclaimer = () => {
    setIsFirstVisit(false);
    setIsDisclaimerOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageMeta />
      <div className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans selection:bg-gold/25 selection:text-navy">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy focus:text-gold focus:border focus:border-gold focus:text-xs focus:font-semibold focus:uppercase"
        >
          Skip to main content
        </a>

        {/* Global Sticky Header */}
        <Header onOpenDisclaimer={handleOpenDisclaimer} />

        {/* Main Content Area */}
        <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/advocates" element={<Advocates />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Deep Navy Footer */}
        <Footer
          onOpenDisclaimer={handleOpenDisclaimer}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />

        {/* Bar Council of India Rule 36 Modal */}
        <DisclaimerModal
          isOpen={isDisclaimerOpen}
          onClose={() => setIsDisclaimerOpen(false)}
          onAccept={handleAcceptDisclaimer}
          isFirstVisit={isFirstVisit}
        />

        {/* Privacy Notice Modal */}
        <PrivacyModal
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { firmInfo } from '../data/firmInfo';

export default function DisclaimerModal({ isOpen, onClose, onAccept, isFirstVisit = false }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="relative w-full max-w-2xl bg-ivory border border-gold/40 shadow-2xl p-6 sm:p-8 md:p-10 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gold/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-navy text-gold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest-caps text-gold font-semibold block">
                Regulatory Compliance Notice
              </span>
              <h3 id="disclaimer-title" className="font-serif text-xl sm:text-2xl text-navy font-normal">
                Bar Council of India Rule 36 Disclaimer
              </h3>
            </div>
          </div>

          {!isFirstVisit && (
            <button
              onClick={onClose}
              className="p-1 text-charcoal/60 hover:text-navy focus:outline-none"
              aria-label="Close disclaimer modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="mt-6 space-y-4 text-xs sm:text-sm text-charcoal/85 leading-relaxed font-sans">
          <div className="p-3.5 bg-ivory-warm border-l-2 border-gold text-xs leading-relaxed text-charcoal">
            <strong>Mandatory Professional Undertaking:</strong> Under the rules established by the Bar Council of India, advocates are prohibited from advertising, canvassing, or soliciting legal work.
          </div>

          {firmInfo.bciDisclaimer.fullText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="text-[11px] text-secondary border-t border-charcoal/10 pt-3">
            <strong>Demonstration Note:</strong> This website is an illustrative design showcase created for demonstration to Indian legal professionals. Actual public deployment is strictly subject to legal review by a licensed advocate under the Advocates Act, 1961.
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-4 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-end gap-3">
          {!isFirstVisit ? (
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-navy text-ivory hover:bg-navy-light transition-colors"
            >
              Close Window
            </button>
          ) : (
            <button
              onClick={onAccept}
              className="w-full sm:w-auto px-8 py-3 text-xs font-semibold uppercase tracking-widest-caps bg-navy text-ivory hover:bg-navy-light transition-colors border border-gold/40 shadow-sm"
            >
              I Acknowledge & Agree to Proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


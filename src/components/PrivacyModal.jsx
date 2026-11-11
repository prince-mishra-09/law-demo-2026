import React, { useEffect } from 'react';
import { X, Lock } from 'lucide-react';
import { firmInfo } from '../data/firmInfo';

export default function PrivacyModal({ isOpen, onClose }) {
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
      aria-labelledby="privacy-title"
    >
      <div className="relative w-full max-w-xl bg-ivory border border-gold/40 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-gold/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-navy text-gold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest-caps text-gold font-semibold block">
                Information Privacy
              </span>
              <h3 id="privacy-title" className="font-serif text-xl sm:text-2xl text-navy font-normal">
                {firmInfo.privacyNotice.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-charcoal/60 hover:text-navy focus:outline-none"
            aria-label="Close privacy notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-4 text-xs sm:text-sm text-charcoal/85 leading-relaxed font-sans">
          <p>
            Veritas Legal Chambers is committed to maintaining the confidentiality of any information shared with the chambers in compliance with advocate-client privilege principles recognized under the Indian Evidence Act / Bharatiya Sakshya Adhiniyam.
          </p>

          <ul className="space-y-3 pl-2">
            {firmInfo.privacyNotice.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-xs leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 text-[11px] text-secondary border-t border-charcoal/10">
            For privacy inquiries or document return requests, please contact registry@veritaslegalchambers.in.
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gold/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 text-xs font-semibold uppercase tracking-wider bg-navy text-ivory hover:bg-navy-light transition-colors"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
}


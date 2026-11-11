import React, { useState } from 'react';

export default function ArchitecturalImage({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  caption
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-navy-dark ${aspectRatio} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          }`}
          loading="lazy"
        />
      ) : (
        /* Fallback Neoclassical Architectural SVG */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-navy-dark via-navy to-navy-surface text-gold border border-gold/20 select-none">
          <svg
            className="w-20 h-20 opacity-80 mb-3"
            viewBox="0 0 100 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Pediment / Triangular roof */}
            <polygon points="50,10 90,30 10,30" stroke="#AE9360" fill="none" strokeWidth="2" />
            <line x1="8" y1="34" x2="92" y2="34" stroke="#AE9360" strokeWidth="2" />
            {/* Columns */}
            <line x1="20" y1="34" x2="20" y2="70" stroke="#AE9360" strokeWidth="2" />
            <line x1="35" y1="34" x2="35" y2="70" stroke="#AE9360" strokeWidth="2" />
            <line x1="50" y1="34" x2="50" y2="70" stroke="#AE9360" strokeWidth="2" />
            <line x1="65" y1="34" x2="65" y2="70" stroke="#AE9360" strokeWidth="2" />
            <line x1="80" y1="34" x2="80" y2="70" stroke="#AE9360" strokeWidth="2" />
            {/* Base */}
            <rect x="5" y="70" width="90" height="6" stroke="#AE9360" strokeWidth="2" />
          </svg>
          <span className="font-serif text-ivory tracking-[0.2em] text-xs uppercase font-medium">
            VERITAS LEGAL CHAMBERS
          </span>
          <span className="text-[9px] tracking-[0.25em] text-gold/70 uppercase mt-1 font-mono">
            DELHI HIGH COURT ENCLAVE &bull; ARCHITECTURAL STUDY
          </span>
        </div>
      )}

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />

      {caption && (
        <div className="absolute bottom-2 left-3 right-3 text-left">
          <span className="text-[10px] tracking-wider uppercase text-ivory/70 font-mono">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}


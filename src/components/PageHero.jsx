import React from 'react';
import ArchitecturalImage from './ArchitecturalImage';

export default function PageHero({
  label,
  title,
  description,
  imageSrc,
  imageAlt = "Veritas Legal Chambers",
  badge
}) {
  return (
    <section className="relative bg-navy text-ivory py-16 sm:py-20 lg:py-24 border-b border-gold/30 overflow-hidden">
      {/* Subtle decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy-surface opacity-95" />
      
      {/* Delicate gold geometric accent lines */}
      <div className="absolute top-0 right-0 w-96 h-96 border-r border-t border-gold/10 pointer-events-none transform translate-x-20 -translate-y-20" />
      
      <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5 animate-slide-up">
            {label && (
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-gold"></span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest-caps uppercase text-gold font-sans">
                  {label}
                </span>
              </div>
            )}

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.15] tracking-tight text-ivory">
              {title}
            </h1>

            {description && (
              <p className="text-base sm:text-lg text-ivory/80 font-sans leading-relaxed max-w-2xl">
                {description}
              </p>
            )}

            {badge && (
              <div className="pt-2">
                <span className="inline-block text-[11px] tracking-wider uppercase text-gold/90 bg-gold/10 border border-gold/30 px-3 py-1">
                  {badge}
                </span>
              </div>
            )}
          </div>

          {/* Supporting Architectural Image (5 cols on lg) */}
          {imageSrc && (
            <div className="lg:col-span-5 animate-fade-in">
              <div className="relative p-2 border border-gold/30 bg-navy-dark/40 shadow-xl">
                <ArchitecturalImage
                  src={imageSrc}
                  alt={imageAlt}
                  aspectRatio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                />
                <div className="mt-2 text-right">
                  <span className="text-[10px] tracking-widest uppercase text-ivory/50 font-mono">
                    NEW DELHI &bull; ARCHITECTURAL STUDY
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = ''
}) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="h-[1px] w-6 bg-gold"></span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest-caps uppercase text-gold font-sans">
            {label}
          </span>
          {isCenter && <span className="h-[1px] w-6 bg-gold"></span>}
        </div>
      )}

      {title && (
        <h2
          className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-normal leading-[1.2] tracking-tight ${
            isDark ? 'text-ivory-light' : 'text-navy'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-sans ${
            isDark ? 'text-ivory/80' : 'text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}

      <div className={`mt-5 ${isCenter ? 'mx-auto' : ''} h-[1px] w-12 bg-gold/40`} />
    </div>
  );
}


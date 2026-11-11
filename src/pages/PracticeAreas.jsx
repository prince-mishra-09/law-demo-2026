import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Scale, Building, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { practiceAreas } from '../data/practiceAreas';
import { editorialImages } from '../data/images';

export default function PracticeAreas() {
  return (
    <div className="bg-ivory text-charcoal">
      {/* Page Hero */}
      <PageHero
        label="SUBSTANTIVE & PROCEDURAL JURISDICTIONS"
        title="Areas of Practice"
        description="An overview of the legal practice areas represented in this illustrative website concept."
        imageSrc={editorialImages.heroColonnade}
        imageAlt="Classical courthouse pillars and judicial architecture"
        badge="SIX CORE PRACTICE DOMAINS &bull; NEW DELHI"
      />

      {/* Jurisdictional Context Bar */}
      <section className="bg-white border-b border-charcoal/10 py-6">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-secondary font-sans">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-gold shrink-0" />
              <span>
                <strong>Appellate & Trial Forums:</strong> Supreme Court of India &bull; High Court of Delhi &bull; District Courts (Tis Hazari, Patiala House, Saket, Rohini, Karkardooma, Dwarka) &bull; NCLT &bull; NCDRC
              </span>
            </div>
            <span className="text-[11px] font-mono text-gold-dark uppercase tracking-wider shrink-0">
              NATIONAL CAPITAL REGION
            </span>
          </div>
        </div>
      </section>

      {/* Quick Jump Index Bar */}
      <nav aria-label="Practice Areas Quick Index" className="sticky top-[58px] sm:top-[64px] z-30 bg-ivory/95 backdrop-blur-md border-b border-gold/30 py-3 shadow-xs">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto text-xs py-0.5">
            <span className="text-[10px] uppercase font-semibold text-gold tracking-widest shrink-0 mr-1.5">
              INDEX:
            </span>
            {practiceAreas.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="shrink-0 px-3 py-1 bg-white border border-charcoal/15 text-charcoal hover:border-gold hover:text-navy transition-colors whitespace-nowrap text-[11px]"
              >
                <span className="font-mono text-gold font-medium mr-1.5">{area.number}</span>
                <span>{area.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Editorial Practice Areas Layout */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {practiceAreas.map((area, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={area.id}
                id={area.id}
                className="bg-white border border-charcoal/15 p-8 sm:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:border-gold/60"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-charcoal/10 gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-2xl sm:text-3xl font-light text-gold">
                      {area.number}
                    </span>
                    <span className="h-4 w-[1px] bg-gold/40" />
                    <span className="text-xs uppercase tracking-widest-caps text-secondary font-medium">
                      PRACTICE SECTION
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-charcoal/60">
                    <span className="w-2 h-2 rounded-full bg-gold/70" />
                    <span>Civil & Commercial Jurisdiction</span>
                  </div>
                </div>

                {/* 2-Column Editorial Grid on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
                  {/* Left Column: Title & Detailed Scope (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] font-normal text-navy leading-tight">
                      {area.title}
                    </h2>

                    <div className="gold-divider w-24" />

                    <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed font-sans">
                      {area.detailedScope}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs uppercase tracking-wider font-semibold text-navy">
                        Illustrative Scope of Legal Work:
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-secondary">
                        {area.scopeItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Forums & Statutory Framework (5 cols) */}
                  <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-charcoal/10 lg:pl-10">
                    {/* Primary Forums */}
                    <div className="bg-ivory/60 p-5 border border-charcoal/10 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                        <Building className="w-4 h-4 text-gold" />
                        <span className="uppercase tracking-wider">Common Forums & Benches</span>
                      </div>
                      <ul className="text-xs text-charcoal/80 space-y-1.5 pl-6 list-disc">
                        {area.keyForums.map((forum, idx) => (
                          <li key={idx}>{forum}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Statutory Framework */}
                    <div className="bg-ivory/60 p-5 border border-charcoal/10 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                        <FileCheck className="w-4 h-4 text-gold" />
                        <span className="uppercase tracking-wider">Core Statutory Framework</span>
                      </div>
                      <p className="text-xs text-secondary leading-relaxed font-sans">
                        {area.statutoryFramework}
                      </p>
                    </div>

                    {/* Registry Note */}
                    <div className="p-4 bg-ivory-warm border-l-2 border-gold text-[11px] text-charcoal/80 leading-relaxed">
                      <strong>Registry Protocol:</strong> Briefs for {area.title} are accepted after preliminary conflict check and verification of court registry availability.
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Section: Ethical & Procedural Standard */}
      <section className="py-16 sm:py-20 bg-white border-t border-charcoal/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy text-ivory p-8 sm:p-12 border border-gold/40 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-[11px] uppercase tracking-widest-caps text-gold font-semibold block">
                  REGULATORY NOTICE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                  Information Purposes Only &bull; Bar Council of India
                </h3>
                <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed">
                  The practice areas outlined above are descriptive summaries of subjects handled by chamber advocates. In strict compliance with Bar Council of India guidelines, these descriptions do not constitute solicitation, warranty, or assertion of specialization.
                </p>
              </div>

              <div className="md:col-span-4 flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest-caps bg-gold text-navy hover:bg-gold-light transition-colors"
                >
                  <span>Chambers Information</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


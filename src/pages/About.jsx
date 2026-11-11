import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ShieldCheck, Scale, MapPin, Phone, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ArchitecturalImage from '../components/ArchitecturalImage';
import { firmInfo } from '../data/firmInfo';
import { editorialImages } from '../data/images';

export default function About() {
  const approachIcons = {
    'legal-research': BookOpen,
    'professional-responsibility': ShieldCheck,
    'legal-analysis': Scale,
  };

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        label="THE PRACTICE & HERITAGE"
        title="About the Firm"
        description="An independent legal practice established in New Delhi, dedicated to rigorous statutory research, disciplined advocacy, and professional integrity."
        imageSrc={editorialImages.delhiArchitecture}
        imageAlt="New Delhi judicial and institutional architecture"
        badge="ESTABLISHED PRACTICE &bull; NEW DELHI"
      />

      {/* 2. Firm Overview */}
      <section className="py-16 sm:py-24 bg-white border-b border-charcoal/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                label="FOUNDATIONAL PHILOSOPHY"
                title="Institutional Structure & Legal Philosophy"
                className="mb-6"
              />

              <div className="border-l-2 border-gold pl-5 py-2 bg-ivory/50">
                <p className="font-serif italic text-navy text-base leading-relaxed">
                  &ldquo;A legal chamber is built not on declaratory claims, but on the quiet precision of its statutory research and the fidelity with which it serves the court.&rdquo;
                </p>
              </div>

              <div className="text-xs text-secondary leading-relaxed space-y-2 pt-2">
                <p>
                  <strong className="text-navy">Jurisdiction:</strong> Veritas Legal Chambers regularly enters appearances before the Supreme Court of India, the High Court of Delhi, and statutory tribunals across the National Capital Region.
                </p>
                <p>
                  <strong className="text-navy">Code of Ethics:</strong> The practice strictly conforms to the Bar Council of India Rules framed under the Advocates Act, 1961.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-charcoal/85 font-sans leading-relaxed text-sm sm:text-base">
              <p>
                Founded in New Delhi, <strong>VERITAS LEGAL CHAMBERS</strong> operates as an independent chamber practice. The chamber structure draws upon the traditional Indian legal bar tradition, where independent advocates collaborate under shared scholarly standards, combined research archives, and disciplined chamber management.
              </p>

              <p>
                The chambers handle both advisory retainers and contentious litigation. Our work spans complex commercial disputes, civil appeals, constitutional writ petitions, criminal defense in economic offenses, and institutional arbitration. Each brief is subjected to rigorous multi-tiered examination: factual chronologies, exhaustive statutory scrutiny, and thorough verification of binding precedents from constitutional courts.
              </p>

              <p>
                We maintain active practice before the High Court of Delhi at Sher Shah Road, the Supreme Court of India at Tilak Marg, as well as specialized forums including the National Company Law Tribunal (NCLT), National Consumer Disputes Redressal Commission (NCDRC), and the Delhi International Arbitration Centre (DIAC).
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-ivory border border-charcoal/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold block mb-1">
                    PRIMARY SEAT
                  </span>
                  <span className="font-serif text-navy text-base font-medium">New Delhi, India</span>
                  <p className="text-xs text-secondary mt-1">High Court of Delhi Jurisdiction</p>
                </div>
                <div className="p-4 bg-ivory border border-charcoal/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold block mb-1">
                    ETHICAL ADHERENCE
                  </span>
                  <span className="font-serif text-navy text-base font-medium">Rule 36, BCI</span>
                  <p className="text-xs text-secondary mt-1">Informational and Restrained Presentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Professional Approach (Three Restrained Themes) */}
      <section className="py-16 sm:py-24 bg-ivory border-b border-charcoal/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="METHODOLOGY & DISCIPLINE"
            title="Our Professional Approach"
            subtitle="The chambers operate around three fundamental principles of legal craftsmanship. These represent internal standards of practice rather than claims of superiority."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {firmInfo.approaches.map((item) => {
              const IconComponent = approachIcons[item.id] || BookOpen;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-charcoal/15 p-8 flex flex-col justify-between hover:border-gold transition-colors duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-charcoal/10">
                      <div className="p-2 bg-navy text-gold">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-gold tracking-widest">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-navy font-normal mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium text-gold-dark mb-4 uppercase tracking-wider">
                      {item.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-charcoal/10 text-[11px] text-charcoal/50 font-mono">
                    CHAMBERS PROTOCOL &bull; SEC. {item.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Office / Practice Environment (Full-Width Photographic Study) */}
      <section className="py-16 sm:py-24 bg-navy text-ivory border-b border-gold/30">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="CHAMBERS ENVIRONMENT"
            title="The Chambers & Research Archive"
            subtitle="A disciplined physical and digital workspace equipped for extensive statutory inquiry and client conferences."
            theme="dark"
          />

          <div className="mt-8 border border-gold/30 p-2 sm:p-3 bg-navy-dark shadow-2xl">
            <ArchitecturalImage
              src={editorialImages.libraryShelves}
              alt="Law library and chambers environment at Veritas Legal Chambers"
              aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
            />
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-ivory/70 border-t border-gold/20">
              <div>
                <span className="text-gold uppercase tracking-wider font-semibold block sm:inline mr-2">
                  Library & Reference Resources:
                </span>
                Comprehensive Supreme Court Cases (SCC), All India Reporter (AIR), and Delhi Law Times (DLT).
              </div>
              <span className="font-mono text-[10px] text-ivory/40">
                CHAMBERS ARCHIVE &bull; DELHI
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Information Linkage */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory border border-charcoal/15 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] font-semibold tracking-widest-caps uppercase text-gold block">
                INQUIRIES & REGISTRY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-navy font-normal">
                Chambers Registry & Communication
              </h3>
              <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                For administrative inquiries, case listings, or written briefs, contact the chamber registry at our High Court chambers or central office.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest-caps bg-navy text-ivory hover:bg-navy-light transition-colors"
              >
                <span>View Office & Contact Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

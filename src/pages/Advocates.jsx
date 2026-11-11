import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Scale, Building, ShieldCheck, Info } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { advocates } from '../data/advocates';
import { editorialImages } from '../data/images';

export default function Advocates() {
  return (
    <div className="bg-ivory text-charcoal">
      {/* Page Hero */}
      <PageHero
        label="PROFESSIONAL BIOGRAPHIES"
        title="Our Advocates"
        description="Professional profiles and qualifications of the advocates associated with the practice."
        imageSrc={editorialImages.boardroom}
        imageAlt="Chambers conference room and advocate desks"
        badge="BAR COUNCIL OF DELHI &bull; ADMITTED ADVOCATES"
      />

      {/* Compliance Notice Banner */}
      <section className="bg-ivory-warm border-b border-charcoal/10 py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 text-xs text-charcoal/80">
            <Info className="w-4 h-4 text-gold shrink-0" />
            <span>
              <strong>Sample Profile Disclosure:</strong> In accordance with Bar Council of India guidelines, all names, credentials, and enrolment references displayed herein serve as illustrative design placeholders for website demonstration.
            </span>
          </div>
        </div>
      </section>

      {/* Main Advocates Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-charcoal/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="MEMBERS OF THE CHAMBERS"
            title="Advocate Profiles & Qualifications"
            subtitle="Admitted advocates practicing before constitutional courts, statutory tribunals, and commercial arbitral forums."
          />

          {/* 3-Column Desktop, 2-Column Tablet, 1-Column Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12">
            {advocates.map((advocate) => (
              <article
                key={advocate.id}
                className="bg-ivory/40 border border-charcoal/15 flex flex-col justify-between hover:border-gold transition-all duration-300 group shadow-sm"
              >
                <div>
                  {/* Portrait Placeholder / Refined Monogram */}
                  <div className="relative aspect-[4/3] bg-navy-dark flex items-center justify-center p-6 border-b border-charcoal/15 overflow-hidden">
                    {/* Subtle geometric pattern background */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#AE9360_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 mx-auto rounded-none border border-gold/50 bg-navy flex items-center justify-center shadow-lg group-hover:border-gold transition-colors">
                        <span className="font-serif text-3xl font-semibold text-gold tracking-widest">
                          {advocate.monogram}
                        </span>
                      </div>
                      <span className="mt-3 block text-[10px] tracking-widest-caps uppercase text-ivory/60 font-mono">
                        CHAMBERS PORTRAIT PLACEHOLDER
                      </span>
                    </div>

                    {advocate.isLead && (
                      <span className="absolute top-3 right-3 text-[9px] uppercase tracking-wider bg-gold text-navy font-semibold px-2 py-0.5">
                        CHAMBER COUNSEL
                      </span>
                    )}
                  </div>

                  {/* Profile Header */}
                  <div className="p-6 sm:p-7 space-y-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest-caps text-gold font-semibold block mb-1">
                        ADVOCATE-AT-LAW
                      </span>
                      <h3 className="font-serif text-2xl text-navy font-normal">
                        {advocate.name}
                      </h3>
                      <p className="text-xs text-secondary mt-1 font-sans">
                        {advocate.designation}
                      </p>
                    </div>

                    {/* Factual Biography */}
                    <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                      {advocate.biography}
                    </p>

                    <div className="h-[1px] w-full bg-charcoal/10" />

                    {/* Academic Qualifications */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                        <GraduationCap className="w-4 h-4 text-gold shrink-0" />
                        <span className="uppercase tracking-wider text-[11px]">Academic Qualifications</span>
                      </div>
                      <ul className="text-xs text-secondary space-y-1 pl-6">
                        {advocate.academicQualifications.map((degree, idx) => (
                          <li key={idx} className="list-disc leading-relaxed">
                            {degree}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bar Council Enrolment */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                        <Scale className="w-4 h-4 text-gold shrink-0" />
                        <span className="uppercase tracking-wider text-[11px]">Bar Enrolment</span>
                      </div>
                      <p className="text-xs text-secondary pl-6 font-mono">
                        {advocate.barCouncilDetails}
                      </p>
                    </div>

                    {/* Courts of Practice */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                        <Building className="w-4 h-4 text-gold shrink-0" />
                        <span className="uppercase tracking-wider text-[11px]">Courts of Practice</span>
                      </div>
                      <p className="text-xs text-secondary pl-6 font-sans">
                        {advocate.courtsOfPractice}
                      </p>
                    </div>

                    {/* Practice Focus Tags */}
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-charcoal/50 font-sans block mb-2">
                        Practice Focus
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {advocate.primaryAreas.map((area, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-white text-navy px-2.5 py-1 border border-charcoal/15 font-sans"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Footer: Professional Communication Protocol */}
                <div className="p-4 sm:p-6 bg-ivory border-t border-charcoal/15 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-secondary">
                    Languages: {advocate.languages.join(', ')}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 font-medium text-navy hover:text-gold transition-colors"
                  >
                    <span>Contact Registry</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standards of Advocacy Callout */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gold/40 bg-white p-8 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-[11px] uppercase tracking-widest-caps text-gold font-semibold block">
                  PROFESSIONAL CONDUCT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-navy font-normal">
                  Chamber Protocol & Professional Conduct
                </h3>
                <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                  All advocates associated with Veritas Legal Chambers practice strictly in conformity with Chapter II of Part VI of the Bar Council of India Rules relating to Standards of Professional Conduct and Etiquette.
                </p>
              </div>

              <div className="md:col-span-4 flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest-caps bg-navy text-ivory hover:bg-navy-light transition-colors"
                >
                  <span>Chambers Registry</span>
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


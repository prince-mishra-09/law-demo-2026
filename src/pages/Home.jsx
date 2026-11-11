import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock, ShieldCheck, Scale, BookOpen, Building2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ArchitecturalImage from '../components/ArchitecturalImage';
import { practiceAreas } from '../data/practiceAreas';
import { advocates } from '../data/advocates';
import { firmInfo } from '../data/firmInfo';
import { editorialImages } from '../data/images';

export default function Home() {
  return (
    <div className="bg-ivory text-charcoal">
      {/* SECTION 1: HERO */}
      <section className="relative bg-navy text-ivory overflow-hidden border-b border-gold/30">
        {/* Subtle architectural grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-[#182B42] opacity-95" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[radial-gradient(#AE9360_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Headline & Navigation (7 cols) */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 animate-slide-up">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-gold"></span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest-caps uppercase text-gold font-sans">
                  LEGAL PRACTICE &bull; NEW DELHI, INDIA
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.8rem] font-normal leading-[1.12] tracking-tight text-ivory">
                  VERITAS LEGAL <br className="hidden sm:inline" />
                  CHAMBERS
                </h1>
                <div className="h-[2px] w-20 bg-gold mt-4" />
              </div>

              <p className="text-base sm:text-xl text-ivory/80 font-sans font-light leading-relaxed max-w-xl">
                An independent legal practice based in New Delhi, India. Providing disciplined counsel and appellate dispute representation across civil, criminal, and commercial law.
              </p>

              {/* Navigation Action Links (Internal Navigation, not aggressive CTA) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest-caps bg-gold text-navy hover:bg-gold-light transition-all duration-200 border border-gold"
                >
                  <span>Explore the Firm</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/practice-areas"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest-caps text-ivory hover:text-gold border border-ivory/30 hover:border-gold transition-all duration-200"
                >
                  <span>View Practice Areas</span>
                </Link>
              </div>

              {/* Subtle regulatory note */}
              <div className="pt-4 flex items-center gap-2 text-xs text-ivory/60">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>Information presented in adherence to Bar Council of India standards.</span>
              </div>
            </div>

            {/* Right Column: Architectural Photography (5 cols) */}
            <div className="lg:col-span-5 animate-clip-reveal">
              <div className="relative p-2.5 sm:p-3 bg-navy-dark border border-gold/30 shadow-2xl">
                <ArchitecturalImage
                  src={editorialImages.heroColonnade}
                  alt="Courthouse architectural colonnade representing Veritas Legal Chambers"
                  aspectRatio="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
                />
                <div className="mt-2.5 text-left flex justify-between items-center text-[10px] tracking-widest uppercase font-mono">
                  <span className="text-gold">SUPREME COURT & HIGH COURT JURISDICTION</span>
                  <span className="text-ivory/50">NEW DELHI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-16 sm:py-24 bg-ivory border-b border-charcoal/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left 6 cols: Text Overview */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                label="THE FIRM"
                title="An Introduction to the Practice"
                className="mb-6"
              />

              <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed font-sans">
                {firmInfo.overview.lead}
              </p>

              <p className="text-sm sm:text-base text-secondary leading-relaxed font-sans">
                {firmInfo.overview.body}
              </p>

              {/* Dignified Quote Callout */}
              <div className="p-4 sm:p-5 bg-ivory-warm border-l-2 border-gold my-4">
                <p className="font-serif italic text-navy text-sm sm:text-base leading-relaxed">
                  &ldquo;{firmInfo.overview.quote}&rdquo;
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest-caps text-navy hover:text-gold transition-colors group"
                >
                  <span>Read Detailed Firm Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right 5 cols: Library Image */}
            <div className="lg:col-span-5">
              <div className="relative border border-charcoal/15 p-2 bg-white shadow-md">
                <ArchitecturalImage
                  src={editorialImages.libraryShelves}
                  alt="Legal research library and statutory references"
                  aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                />
                <div className="p-3 text-xs text-secondary font-sans border-t border-charcoal/10 mt-1">
                  <span className="font-medium text-navy">Chambers Reference Library:</span> Comprehensive collections of Indian judicial law reports and Central enactments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AREAS OF PRACTICE */}
      <section className="py-16 sm:py-24 bg-white border-b border-charcoal/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <SectionHeading
              label="AREAS OF PRACTICE"
              title="Practice Areas & Legal Representations"
              subtitle="An overview of the legal practice areas represented in this illustrative website concept."
              className="mb-0 max-w-2xl"
            />

            <Link
              to="/practice-areas"
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest-caps text-navy hover:text-gold transition-colors mt-4 md:mt-0"
            >
              <span>Explore All 6 Practice Areas</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

          {/* Clean Editorial List with Restrained Grid (NOT a loud marketing card grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/15 border border-charcoal/15">
            {practiceAreas.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-ivory/60 transition-colors duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-charcoal/10">
                    <span className="font-mono text-xs font-semibold text-gold tracking-widest">
                      {item.number}
                    </span>
                    <span className="text-[10px] tracking-wider uppercase text-secondary">
                      NEW DELHI
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-navy mb-3 group-hover:text-gold-dark transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-charcoal/10 flex items-center justify-between text-xs">
                  <span className="text-charcoal/60 font-sans text-[11px]">Subordinate & Appellate Courts</span>
                  <Link
                    to="/practice-areas"
                    className="inline-flex items-center gap-1 font-medium text-navy group-hover:text-gold transition-colors"
                    aria-label={`View details on ${item.title}`}
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/practice-areas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest-caps bg-navy text-ivory hover:bg-navy-light w-full"
            >
              <span>Explore All 6 Practice Areas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: ADVOCATES PREVIEW */}
      <section className="py-16 sm:py-24 bg-ivory border-b border-charcoal/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <SectionHeading
              label="OUR ADVOCATES"
              title="Advocates Associated with the Practice"
              subtitle="Illustrative profiles of advocates representing the fictional chambers."
              className="mb-0 max-w-2xl"
            />

            <Link
              to="/advocates"
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest-caps text-navy hover:text-gold transition-colors mt-4 md:mt-0"
            >
              <span>View All Profiles</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

          {/* 3-Column Profile Cards with Monograms & Academic Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advocates.map((advocate) => (
              <div
                key={advocate.id}
                className="bg-white border border-charcoal/15 p-6 sm:p-7 flex flex-col justify-between hover:border-gold/60 transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Monogram / Portrait Placeholder */}
                  <div className="flex items-center gap-4 pb-5 border-b border-charcoal/10 mb-5">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-navy flex items-center justify-center text-gold font-serif text-xl sm:text-2xl font-semibold border border-gold/40 shadow-inner">
                      {advocate.monogram}
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest-caps uppercase text-gold font-semibold block">
                        ILLUSTRATIVE PROFILE
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-navy font-normal">
                        {advocate.name}
                      </h3>
                      <p className="text-xs text-secondary mt-0.5 font-sans">
                        {advocate.designation}
                      </p>
                    </div>
                  </div>

                  {/* Academic Credentials */}
                  <div className="space-y-3 mb-5">
                    <div>
                      <span className="text-[10px] tracking-wider uppercase text-charcoal/50 font-sans block mb-1">
                        Academic Qualifications
                      </span>
                      <ul className="text-xs text-charcoal/90 space-y-1">
                        {advocate.academicQualifications.map((degree, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-gold mt-0.5">&bull;</span>
                            <span>{degree}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] tracking-wider uppercase text-charcoal/50 font-sans block mb-1">
                        Bar Council Enrolment Details
                      </span>
                      <p className="text-xs text-secondary font-mono">
                        {advocate.barCouncilDetails}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-charcoal/10">
                  <span className="text-[10px] tracking-wider uppercase text-charcoal/50 font-sans block mb-1">
                    Primary Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {advocate.primaryAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-ivory px-2 py-0.5 text-navy border border-charcoal/10"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/advocates"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest-caps bg-navy text-ivory hover:bg-navy-light w-full"
            >
              <span>View All Profiles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: OFFICE & LOCATION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OFFICE INFORMATION"
            title="Chambers & Location Information"
            subtitle="Factual office registry details and communication channels for Veritas Legal Chambers in New Delhi."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
            {/* Left 6 cols: Location & Address */}
            <div className="lg:col-span-6 bg-ivory border border-charcoal/15 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest-caps uppercase text-gold block mb-2">
                  PRIMARY CHAMBERS
                </span>
                <h4 className="font-serif text-lg text-navy mb-2">
                  Delhi High Court Complex
                </h4>
                <p className="text-sm text-charcoal/90 leading-relaxed font-sans">
                  {firmInfo.address.full}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/10">
                <span className="text-xs font-semibold tracking-widest-caps uppercase text-gold block mb-2">
                  CITY CONSULTATION OFFICE
                </span>
                <p className="text-sm text-charcoal/90 leading-relaxed font-sans">
                  {firmInfo.address.cityOffice}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/10 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-xs text-secondary block">Registry & Inquiries:</span>
                    <a href={`tel:${firmInfo.contact.phonePrimary}`} className="text-navy font-medium hover:text-gold">
                      {firmInfo.contact.phonePrimary}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-xs text-secondary block">Electronic Mail:</span>
                    <a href={`mailto:${firmInfo.contact.email}`} className="text-navy font-medium hover:text-gold">
                      {firmInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-xs text-secondary block">Chambers Timings:</span>
                    <span className="text-navy">{firmInfo.contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Architectural Chambers Representation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="border border-charcoal/15 p-2 bg-ivory shadow-sm">
                <ArchitecturalImage
                  src={editorialImages.boardroom}
                  alt="Chambers conference room at Veritas Legal Chambers, New Delhi"
                  aspectRatio="aspect-[16/10]"
                />
                <div className="p-3 text-xs text-secondary font-sans border-t border-charcoal/10">
                  <span className="font-medium text-navy">Conference Room & Consultation Chamber:</span> Facilitating private client conferences and arbitral proceedings.
                </div>
              </div>

              <div className="p-4 bg-ivory-warm border-l-2 border-gold text-xs text-charcoal/80 leading-relaxed">
                <strong>Registry Protocol:</strong> Consultations with chamber advocates are arranged strictly by prior written appointment or registry confirmation in compliance with professional protocol.
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest-caps text-navy hover:text-gold transition-colors"
                >
                  <span>Go to Full Contact Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

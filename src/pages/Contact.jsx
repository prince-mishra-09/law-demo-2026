import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Building2, FileText } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { firmInfo } from '../data/firmInfo';
import { editorialImages } from '../data/images';

export default function Contact() {
  return (
    <div className="bg-ivory text-charcoal">
      {/* Page Hero */}
      <PageHero
        label="REGISTRY & COMMUNICATIONS"
        title="Office & Contact Information"
        description="Factual chambers address, telephone directory, registry hours, and location details for Veritas Legal Chambers in New Delhi."
        imageSrc={editorialImages.delhiArchitecture}
        imageAlt="New Delhi High Court and India Gate institutional area"
        badge="PRIMARY CHAMBERS &bull; HIGH COURT OF DELHI"
      />

      {/* Main Office Information Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-charcoal/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OFFICE DIRECTORY"
            title="Chambers & Communication Directory"
            subtitle="Official registry coordinates for formal communication, case filings, and judicial listings."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-10">
            {/* Left 6 Columns: Contact Cards */}
            <div className="lg:col-span-6 space-y-8">
              {/* Card 1: Primary Chambers */}
              <div className="bg-ivory border border-charcoal/15 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-charcoal/10">
                  <div className="p-2 bg-navy text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest-caps text-gold font-semibold block">
                      PRIMARY CHAMBERS
                    </span>
                    <h3 className="font-serif text-xl text-navy font-normal">
                      Delhi High Court Chambers
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-charcoal/90 leading-relaxed font-sans">
                  {firmInfo.address.full}
                </p>

                <div className="pt-2 text-xs text-secondary">
                  <strong>Landmark:</strong> Near Gate No. 5, Delhi High Court Complex, Sher Shah Road, New Delhi.
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Delhi+High+Court+Sher+Shah+Road+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 2: City Consultation Office */}
              <div className="bg-ivory border border-charcoal/15 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-charcoal/10">
                  <div className="p-2 bg-navy text-gold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest-caps text-gold font-semibold block">
                      CITY CONSULTATION OFFICE
                    </span>
                    <h3 className="font-serif text-xl text-navy font-normal">
                      Connaught Place Office
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-charcoal/90 leading-relaxed font-sans">
                  {firmInfo.address.cityOffice}
                </p>

                <div className="pt-2 text-xs text-secondary">
                  <strong>Registry Desk:</strong> 4th Floor, Barakhamba Corporate Block, New Delhi – 110001.
                </div>
              </div>

              {/* Card 3: Registry Hours */}
              <div className="bg-ivory border border-charcoal/15 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-charcoal/10">
                  <div className="p-2 bg-navy text-gold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest-caps text-gold font-semibold block">
                      REGISTRY HOURS
                    </span>
                    <h3 className="font-serif text-xl text-navy font-normal">
                      Operating Hours (IST)
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-charcoal/85">
                  <div className="flex justify-between py-1.5 border-b border-charcoal/10">
                    <span className="font-medium text-navy">Monday – Friday</span>
                    <span>09:30 AM – 06:30 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-charcoal/10">
                    <span className="font-medium text-navy">Saturday</span>
                    <span>10:00 AM – 02:00 PM (By appointment)</span>
                  </div>
                  <div className="flex justify-between py-1.5 text-secondary text-xs">
                    <span>Sunday & Supreme Court Holidays</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Direct Links, Map Graphic, & Registry Protocol */}
            <div className="lg:col-span-6 space-y-8">
              {/* Telecommunications & Email Box */}
              <div className="bg-navy text-ivory p-6 sm:p-8 border border-gold/30 shadow-lg space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest-caps text-gold font-semibold block mb-1">
                    OFFICIAL COMMUNICATION CHANNELS
                  </span>
                  <h3 className="font-serif text-2xl text-ivory font-normal">
                    Direct Contact Directory
                  </h3>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Primary Telephone */}
                  <div className="flex items-start gap-4 pb-4 border-b border-ivory/15">
                    <div className="p-2 bg-navy-light text-gold shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-ivory/60 block">Chambers Primary Landline (Click to Call)</span>
                      <a
                        href={`tel:${firmInfo.contact.phonePrimary.replace(/[^0-9+]/g, '')}`}
                        className="text-lg font-serif text-ivory hover:text-gold transition-colors block mt-0.5"
                      >
                        {firmInfo.contact.phonePrimary}
                      </a>
                    </div>
                  </div>

                  {/* Secondary Telephone */}
                  <div className="flex items-start gap-4 pb-4 border-b border-ivory/15">
                    <div className="p-2 bg-navy-light text-gold shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-ivory/60 block">Chambers Secondary Line (Click to Call)</span>
                      <a
                        href={`tel:${firmInfo.contact.phoneSecondary.replace(/[^0-9+]/g, '')}`}
                        className="text-base font-serif text-ivory hover:text-gold transition-colors block mt-0.5"
                      >
                        {firmInfo.contact.phoneSecondary}
                      </a>
                    </div>
                  </div>

                  {/* Primary Email */}
                  <div className="flex items-start gap-4 pb-4 border-b border-ivory/15">
                    <div className="p-2 bg-navy-light text-gold shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-ivory/60 block">Official Registry Email (Click to Send)</span>
                      <a
                        href={`mailto:${firmInfo.contact.email}`}
                        className="text-base text-ivory hover:text-gold transition-colors block mt-0.5 underline underline-offset-4 decoration-gold/40"
                      >
                        {firmInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Alternate Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-navy-light text-gold shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-ivory/60 block">Court Filings & Cause-List Liaison</span>
                      <a
                        href={`mailto:${firmInfo.contact.alternateEmail}`}
                        className="text-sm text-ivory/80 hover:text-gold transition-colors block mt-0.5"
                      >
                        {firmInfo.contact.alternateEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map & Location Graphic Representation */}
              <div className="border border-charcoal/15 bg-white p-3 shadow-sm">
                <div className="relative aspect-[16/10] bg-navy-dark overflow-hidden flex flex-col items-center justify-center p-6 text-center text-ivory">
                  {/* Subtle map coordinate grid effect */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#AE9360_1px,transparent_1px),linear-gradient(to_bottom,#AE9360_1px,transparent_1px)] [background-size:20px_20px]" />
                  
                  <div className="relative z-10 max-w-sm space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-gold tracking-widest uppercase block">
                      GEOGRAPHIC COORDINATES &bull; 28.6083&deg; N, 77.2386&deg; E
                    </span>
                    <h4 className="font-serif text-lg text-ivory font-normal">
                      Delhi High Court Judicial Enclave
                    </h4>
                    <p className="text-xs text-ivory/70 leading-relaxed">
                      Sher Shah Road, Adjacent to Delhi High Court Main Building, India Gate Circle, New Delhi – 110503
                    </p>
                    <div className="pt-2">
                      <a
                        href="https://maps.google.com/?q=Delhi+High+Court+Sher+Shah+Road+New+Delhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-colors"
                      >
                        <span>Open Directions on Map</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-[11px] text-secondary text-center border-t border-charcoal/10">
                  Visitors and litigants may enter through Gate No. 5 subject to High Court security pass protocols.
                </div>
              </div>

              {/* Dignified Registry Notice (NO aggressive marketing form!) */}
              <div className="p-5 bg-ivory-warm border-l-2 border-gold space-y-2 text-xs text-charcoal/80 leading-relaxed">
                <div className="flex items-center gap-2 text-navy font-semibold uppercase tracking-wider text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>Chamber Protocol & Professional Inquiries</span>
                </div>
                <p>
                  In adherence to the Bar Council of India guidelines, Veritas Legal Chambers does not utilize unsolicited marketing questionnaires or commercial intake funnels.
                </p>
                <p className="text-secondary">
                  For formal briefs, court registry queries, or administrative listings, communication should be addressed directly to the chamber registry via verified telephone or written correspondence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


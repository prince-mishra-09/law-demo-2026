import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { navLinks } from '../data/navigation';
import { firmInfo } from '../data/firmInfo';

export default function Footer({ onOpenDisclaimer, onOpenPrivacy }) {
  return (
    <footer className="bg-navy text-ivory/80 pt-16 pb-12 border-t border-gold/30">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-ivory/10">
          {/* Column 1: Brand Wordmark & Factual Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.16em] text-ivory uppercase leading-none group-hover:text-gold transition-colors">
                VERITAS
              </span>
              <span className="block font-sans text-[10px] tracking-[0.24em] uppercase text-gold font-semibold mt-1">
                LEGAL CHAMBERS &bull; NEW DELHI
              </span>
            </Link>

            <p className="text-sm text-ivory/70 leading-relaxed font-sans max-w-md pt-2">
              An independent legal practice based in New Delhi, India. The chambers undertake civil, commercial, criminal, and appellate representation before the Supreme Court of India, the Delhi High Court, and statutory tribunals.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-gold/90 bg-gold/10 px-3 py-1 border border-gold/30 rounded-none">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Practicing in accordance with Bar Council of India Rules</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest-caps font-semibold text-gold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-ivory/80 hover:text-gold transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office Information (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest-caps font-semibold text-gold">
              Chambers & Contact
            </h3>
            <div className="space-y-3 text-sm text-ivory/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  {firmInfo.address.line1},<br />
                  {firmInfo.address.line2},<br />
                  {firmInfo.address.city} – {firmInfo.address.postalCode}, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${firmInfo.contact.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-gold transition-colors"
                >
                  {firmInfo.contact.phonePrimary}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${firmInfo.contact.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {firmInfo.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-ivory/70">
                  {firmInfo.contact.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Notice Banner & Bottom Row */}
        <div className="pt-8 space-y-6">
          <div className="bg-navy-dark/70 border border-gold/20 p-4 sm:p-5 text-xs text-ivory/60 leading-relaxed">
            <strong className="text-gold font-medium uppercase tracking-wider block mb-1">
              Bar Council of India Disclaimer:
            </strong>
            This website is intended solely to provide general factual information about Veritas Legal Chambers. As per the Bar Council of India Rules, advocates in India are not permitted to advertise or solicit work. Accessing this site does not create an advocate-client relationship.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60 pt-2">
            <p>
              &copy; {new Date().getFullYear()} {firmInfo.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
              <button
                onClick={onOpenDisclaimer}
                className="hover:text-gold underline underline-offset-4 decoration-gold/40 transition-colors"
              >
                Legal Disclaimer
              </button>
              <span className="text-ivory/20">&bull;</span>
              <button
                onClick={onOpenPrivacy}
                className="hover:text-gold underline underline-offset-4 decoration-gold/40 transition-colors"
              >
                Privacy Notice
              </button>
              <span className="text-ivory/20">&bull;</span>
              <span className="text-ivory/40">Fictional Demonstration Concept</span>
            </div>
          </div>

          {/* Designer & Developer Attribution */}
          <div className="pt-4 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/65">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
              <span>Developed and designed by</span>
              <span className="text-ivory font-medium">Prince Mishra</span>
              <span className="text-ivory/30">&bull;</span>
              <span>Founder of</span>
              <a
                href="https://xwaked.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light font-medium inline-flex items-center gap-1 transition-colors underline underline-offset-4 decoration-gold/40"
              >
                <span>xwaked</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-ivory/70">
              <span className="text-ivory/40">Portfolio:</span>
              <a
                href="https://xwaked.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/90 hover:text-gold font-mono text-[11px] hover:underline underline-offset-2 transition-colors"
              >
                xwaked.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


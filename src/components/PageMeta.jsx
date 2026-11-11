import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': {
    title: 'VERITAS LEGAL CHAMBERS | Legal Practice, New Delhi, India',
    description: 'Veritas Legal Chambers is an independent legal practice based in New Delhi, India, representing matters across civil, commercial, and criminal law.'
  },
  '/about': {
    title: 'About the Firm | VERITAS LEGAL CHAMBERS — New Delhi',
    description: 'Learn about the professional structure, heritage, and research-led legal philosophy of Veritas Legal Chambers in New Delhi.'
  },
  '/advocates': {
    title: 'Our Advocates | VERITAS LEGAL CHAMBERS — Chamber Counsel',
    description: 'Admitted advocates, academic credentials, and practice domains at Veritas Legal Chambers, New Delhi.'
  },
  '/practice-areas': {
    title: 'Areas of Practice | VERITAS LEGAL CHAMBERS — Civil, Commercial & Criminal',
    description: 'Six core legal practice domains: Civil Litigation, Criminal Law, Corporate & Commercial, Property Law, Family Law, and Arbitration.'
  },
  '/contact': {
    title: 'Office & Contact Information | VERITAS LEGAL CHAMBERS — Delhi High Court',
    description: 'Official office registry, telephone directory, Delhi High Court chambers address, and communication channels.'
  }
};

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageTitles[pathname] || {
      title: 'VERITAS LEGAL CHAMBERS | Legal Practice, New Delhi',
      description: 'An independent legal practice based in New Delhi, India.'
    };

    document.title = meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }
  }, [pathname]);

  return null;
}


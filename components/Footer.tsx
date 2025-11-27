'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg text-text-dark mb-3">
              {t.contact.info.companyName}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t.contact.info.region}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-text-dark mb-3">
              {t.nav.contact}
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500">{t.contact.info.emailLabel}:</span>{' '}
                <a 
                  href="mailto:Jackie.chen.hk@outlook.com"
                  className="text-brand-primary hover:underline"
                >
                  {t.contact.info.email}
                </a>
              </div>
              <div>
                <span className="text-gray-500">{t.contact.info.addressLabel}:</span>
                <p className="text-gray-600 mt-1">
                  {t.contact.info.addressPlaceholder}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-dark mb-3">
              {t.nav.home}
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="text-gray-600 hover:text-brand-primary transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-brand-primary transition-colors">
                {t.nav.services}
              </Link>
              <Link href="/cases" className="text-gray-600 hover:text-brand-primary transition-colors">
                {t.nav.cases}
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-brand-primary transition-colors">
                {t.nav.news}
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-brand-primary transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-brand-primary transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-brand-primary transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

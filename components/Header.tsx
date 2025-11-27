'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            {/* Desktop Logo */}
            <div className="hidden md:block">
              <Image
                src="/logo/jcg-solid.png"
                alt="Jackie Chen Group"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>
            {/* Mobile Logo */}
            <div className="block md:hidden">
              <Image
                src="/logo/jcg-minimal.png"
                alt="JCG"
                width={96}
                height={32}
                className="h-7 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-primary transition-colors font-medium">
              {t.nav.home}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-primary transition-colors font-medium">
              {t.nav.about}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-primary transition-colors font-medium">
              {t.nav.services}
            </Link>
            <Link href="/cases" className="text-gray-700 hover:text-brand-primary transition-colors font-medium">
              {t.nav.cases}
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-brand-primary transition-colors font-medium">
              {t.nav.news}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-primary transition-colors font-medium">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                language === 'en'
                  ? 'bg-brand-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('zhCN')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                language === 'zhCN'
                  ? 'bg-brand-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              中文
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4 flex flex-wrap gap-4">
          <Link href="/" className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium">
            {t.nav.home}
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium">
            {t.nav.about}
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium">
            {t.nav.services}
          </Link>
          <Link href="/cases" className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium">
            {t.nav.cases}
          </Link>
          <Link href="/news" className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium">
            {t.nav.news}
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium">
            {t.nav.contact}
          </Link>
        </nav>
      </div>
    </header>
  );
}

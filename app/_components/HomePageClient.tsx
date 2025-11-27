'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HomePageClient: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section - Two Column Layout */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column - Text & CTA */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              {t.home.heroTitle}
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-xl mb-8">
              {t.home.heroSubtitle}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {t.home.heroBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button variant="primary" href="/contact">
                {t.home.heroCtaPrimary}
              </Button>
              <Button variant="outline" href="/services">
                {t.home.heroCtaSecondary}
              </Button>
            </div>
          </div>

          {/* Right Column - Project Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -2 }}
            className="rounded-3xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 p-8 w-full max-w-[420px] flex flex-col gap-6"
          >
            <div className="text-sm font-semibold text-gray-700">Snapshot</div>

            {/* Item Row 1 */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100 hover:bg-gray-50/60 transition-colors duration-200 rounded-lg px-1">
              <div className="flex items-center gap-3">
                <span className="text-lg">🌏</span>
                <span className="text-gray-600 text-sm">Markets</span>
              </div>
              <span className="font-medium text-gray-900">Asia-focused</span>
            </div>

            {/* Item Row 2 */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100 hover:bg-gray-50/60 transition-colors duration-200 rounded-lg px-1">
              <div className="flex items-center gap-3">
                <span className="text-lg">🎛</span>
                <span className="text-gray-600 text-sm">Focus areas</span>
              </div>
              <span className="font-medium text-gray-900 text-right">Investment · Brand · F&B</span>
            </div>

            {/* Item Row 3 */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100 hover:bg-gray-50/60 transition-colors duration-200 rounded-lg px-1">
              <div className="flex items-center gap-3">
                <span className="text-lg">🤝</span>
                <span className="text-gray-600 text-sm">Collaboration</span>
              </div>
              <span className="font-medium text-gray-900 text-right">Project-based / Retainer</span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed pt-2">
              Integrated platform combining investment, brand management, F&B operations,
              and digital growth strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.home.sectionIntroTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.home.sectionIntroBody}
            </p>
          </div>
        </div>
      </section>

      {/* Business Pillars Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {t.home.sectionPillarsTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Investment */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-all">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.home.pillars.investment.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.home.pillars.investment.description}
              </p>
            </div>

            {/* Brand Management */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-all">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.home.pillars.brand.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.home.pillars.brand.description}
              </p>
            </div>

            {/* F&B */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 transition-all">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.home.pillars.fnb.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.home.pillars.fnb.description}
              </p>
            </div>

            {/* Advertising */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-all">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.home.pillars.advertising.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.home.pillars.advertising.description}
              </p>
            </div>

            {/* Technology */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-all">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.home.pillars.technology.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.home.pillars.technology.description}
              </p>
            </div>

            {/* Consulting */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-all">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.home.pillars.consulting.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.home.pillars.consulting.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section - Redesigned */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-4">
            {t.home.sectionWhyTitle}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            {t.home.sectionWhySubtitle}
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {t.home.sectionWhyItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  {t.home.sectionWhyCategories[index]}
                </h3>
                <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.home.sectionCtaTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t.home.sectionCtaBody}
            </p>
            <div className="pt-4">
              <Button variant="primary" href="/contact">
                {t.home.sectionCtaButton}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageClient;

'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const AboutPageClient: React.FC = () => {
  const { t } = useLanguage();

  const businessDomains = [
    { icon: '💰', label: t.home.pillars.investment.title },
    { icon: '🎯', label: t.home.pillars.brand.title },
    { icon: '☕', label: t.home.pillars.fnb.title },
    { icon: '📊', label: t.home.pillars.advertising.title },
    { icon: '💻', label: t.home.pillars.technology.title },
    { icon: '💡', label: t.home.pillars.consulting.title },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-gray-900 font-bold text-4xl md:text-5xl">
              {t.about.heroTitle}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are - Two Column Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
                {t.about.sectionWhoTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.sectionWhoBody}
              </p>
            </div>

            {/* Right: Business Domains Summary */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-text-dark mb-6">
                {t.home.sectionPillarsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {businessDomains.map((domain, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-lg"
                  >
                    <span className="text-2xl">{domain.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {domain.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Side by Side Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md">
              <div className="inline-block p-3 bg-brand-primary/10 rounded-full mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
                {t.about.sectionMissionTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.about.sectionMissionBody}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md">
              <div className="inline-block p-3 bg-brand-accent/10 rounded-full mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
                {t.about.sectionVisionTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.about.sectionVisionBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - 3 Feature Blocks */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-12">
              {t.about.sectionApproachTitle}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.about.sectionApproachItems.map((item, index) => {
                const icons = ['🔍', '⚙️', '♻️'];
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="inline-block p-4 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl mb-6">
                      <span className="text-4xl">{icons[index]}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-dark mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-6">
              {t.about.sectionFocusTitle}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {t.about.sectionFocusIntro}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Investment */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">💰</span>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t.about.sectionFocusItems.investment}
                  </p>
                </div>
              </div>

              {/* Brand */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">🎯</span>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t.about.sectionFocusItems.brand}
                  </p>
                </div>
              </div>

              {/* F&B */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">☕</span>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t.about.sectionFocusItems.fnb}
                  </p>
                </div>
              </div>

              {/* Advertising */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">📊</span>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t.about.sectionFocusItems.ads}
                  </p>
                </div>
              </div>

              {/* Technology */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">💻</span>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t.about.sectionFocusItems.tech}
                  </p>
                </div>
              </div>

              {/* Consulting */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">💡</span>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t.about.sectionFocusItems.consulting}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / At a Glance */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-12">
              {t.about.sectionStatsTitle}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md text-center">
                <div className="text-5xl mb-4">🌏</div>
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {t.about.sectionStatsMarkets}
                </h3>
                <p className="text-gray-600">Multiple Asian markets</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {t.about.sectionStatsDomains}
                </h3>
                <p className="text-gray-600">6 business domains</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {t.about.sectionStatsBase}
                </h3>
                <p className="text-gray-600">Hong Kong</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              {t.about.sectionCtaTitle}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t.about.sectionCtaBody}
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="btn-primary"
              >
                {t.about.sectionCtaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageClient;

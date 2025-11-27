'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { JCGCard } from '@/components/ui/Card';

const ServicesPageClient: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { key: 'investment', icon: '💰' },
    { key: 'brand', icon: '🎯' },
    { key: 'fnb', icon: '☕' },
    { key: 'ads', icon: '📊' },
    { key: 'tech', icon: '💻' },
    { key: 'consulting', icon: '💡' },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-gray-900 font-bold text-4xl md:text-5xl">
              {t.services.title}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.services.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Block */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              {t.services.introTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.services.introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Six Service Pillars */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const serviceData = t.services.items[service.key as keyof typeof t.services.items];
              return (
                <JCGCard key={service.key}>
                  <div className="p-8 space-y-4 relative z-10">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-2xl mb-2">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900">
                      {serviceData.title}
                    </h3>
                    
                    {/* Content */}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                      {serviceData.content}
                    </p>
                  </div>
                </JCGCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-12">
            {t.services.whyTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-gradient-to-br from-brand-primary/5 to-transparent">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">{t.services.why1}</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-gradient-to-br from-brand-primary/5 to-transparent">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">{t.services.why2}</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-gradient-to-br from-brand-primary/5 to-transparent">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">{t.services.why3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              {t.services.ctaTitle}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t.services.ctaSubtitle}
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="btn-primary"
              >
                {t.services.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPageClient;

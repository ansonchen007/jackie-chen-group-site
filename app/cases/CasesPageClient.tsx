'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { useState } from 'react';
import { JCGCard } from '@/components/ui/Card';

type CategoryKey = 'all' | 'investment' | 'brand' | 'fnb' | 'ads' | 'tech' | 'consulting';
type CaseKey = 'fnbCafe' | 'brandRefresh' | 'adsCampaign' | 'techApp' | 'investmentProject' | 'consultingEntry';

interface CaseItem {
  key: CaseKey;
  categoryKey: CategoryKey;
  icon: string;
}

const caseItems: CaseItem[] = [
  { key: 'fnbCafe', categoryKey: 'fnb', icon: '☕' },
  { key: 'brandRefresh', categoryKey: 'brand', icon: '🎯' },
  { key: 'adsCampaign', categoryKey: 'ads', icon: '📊' },
  { key: 'techApp', categoryKey: 'tech', icon: '💻' },
  { key: 'investmentProject', categoryKey: 'investment', icon: '💰' },
  { key: 'consultingEntry', categoryKey: 'consulting', icon: '💡' },
];

const CasesPageClient: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CategoryKey>('all');

  const filteredCases = caseItems.filter(
    item => activeFilter === 'all' || item.categoryKey === activeFilter
  );

  const FilterButton = ({ category, label }: { category: CategoryKey; label: string }) => (
    <button
      onClick={() => setActiveFilter(category)}
      className={
        activeFilter === category
          ? 'btn-primary rounded-full text-sm md:text-[15px]'
          : 'btn-secondary rounded-full text-sm md:text-[15px]'
      }
    >
      {label}
    </button>
  );

  return (
    <div className="w-full">
      {/* Hero & Intro */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-gray-900 font-bold text-4xl md:text-5xl">
              {t.cases.title}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.cases.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <FilterButton category="all" label={t.cases.filter.all} />
            <FilterButton category="investment" label={t.cases.filter.investment} />
            <FilterButton category="brand" label={t.cases.filter.brand} />
            <FilterButton category="fnb" label={t.cases.filter.fnb} />
            <FilterButton category="ads" label={t.cases.filter.ads} />
            <FilterButton category="tech" label={t.cases.filter.tech} />
            <FilterButton category="consulting" label={t.cases.filter.consulting} />
          </div>
        </div>
      </section>

      {/* Case Cards Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item) => {
              const caseData = t.cases.items[item.key];
              return (
                <JCGCard key={item.key} className="cursor-pointer">
                  <div className="p-6 space-y-4 relative z-10">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-2xl mb-2">
                      {item.icon}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                        {caseData.category}
                      </span>
                      <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {caseData.industry}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 text-lg leading-snug">
                      {caseData.title}
                    </h3>
                    
                    {/* Summary */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {caseData.summary}
                    </p>
                    
                    {/* Result */}
                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex items-start space-x-2">
                        <span className="text-emerald-700 font-bold flex-shrink-0">✓</span>
                        <p className="text-sm text-gray-700 font-medium">
                          {caseData.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </JCGCard>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No cases found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* More Coming Note */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block p-4 bg-brand-primary/10 rounded-full mb-4">
              <span className="text-4xl">📋</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t.cases.moreNote}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t.cases.subtitle.split('.')[0]}.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                {t.cases.contactButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasesPageClient;

'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { newsPosts } from '@/data/newsPosts';
import Link from 'next/link';
import type { PostCategoryKey, PostTypeKey } from '@/data/newsPosts';

type FilterType = 'all' | PostCategoryKey | PostTypeKey;

const NewsPageClient: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Filter posts based on active filter
  const filteredPosts = newsPosts.filter(post => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'group' || activeFilter === 'insights') {
      return post.typeKey === activeFilter;
    }
    return post.categoryKey === activeFilter;
  });

  const getPostTitle = (translationKey: string) => {
    return t.news.posts[translationKey as keyof typeof t.news.posts].title;
  };

  const getPostCategory = (translationKey: string) => {
    return t.news.posts[translationKey as keyof typeof t.news.posts].category;
  };

  const getPostType = (translationKey: string) => {
    return t.news.posts[translationKey as keyof typeof t.news.posts].type;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.news.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t.news.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={
                activeFilter === 'all'
                  ? 'btn-primary rounded-full text-sm md:text-[15px]'
                  : 'btn-secondary rounded-full text-sm md:text-[15px]'
              }
            >
              {t.news.filter.all}
            </button>
            <button
              onClick={() => setActiveFilter('group')}
              className={
                activeFilter === 'group'
                  ? 'btn-primary rounded-full text-sm md:text-[15px]'
                  : 'btn-secondary rounded-full text-sm md:text-[15px]'
              }
            >
              {t.news.filter.group}
            </button>
            <button
              onClick={() => setActiveFilter('insights')}
              className={
                activeFilter === 'insights'
                  ? 'btn-primary rounded-full text-sm md:text-[15px]'
                  : 'btn-secondary rounded-full text-sm md:text-[15px]'
              }
            >
              {t.news.filter.insights}
            </button>
            <button
              onClick={() => setActiveFilter('fnb')}
              className={
                activeFilter === 'fnb'
                  ? 'btn-primary rounded-full text-sm md:text-[15px]'
                  : 'btn-secondary rounded-full text-sm md:text-[15px]'
              }
            >
              {t.news.filter.fnb}
            </button>
            <button
              onClick={() => setActiveFilter('investment')}
              className={
                activeFilter === 'investment'
                  ? 'btn-primary rounded-full text-sm md:text-[15px]'
                  : 'btn-secondary rounded-full text-sm md:text-[15px]'
              }
            >
              {t.news.filter.investment}
            </button>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <Link href={`/news/${post.slug}`} className="block p-6 space-y-4">
                    {/* Labels */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full">
                        {getPostCategory(post.translationKey)}
                      </span>
                      <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">
                        {getPostType(post.translationKey)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-brand-primary transition-colors">
                      {getPostTitle(post.translationKey)}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {language === 'en' ? post.excerptEn : post.excerptZh}
                    </p>

                    {/* Date & Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        {post.publishedDate}
                      </span>
                      <span className="text-sm font-semibold text-brand-primary hover:text-brand-primary/80 transition-colors">
                        {t.news.post.readMore} →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* No results message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No posts found for this filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Note */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">
              {t.news.moreNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPageClient;

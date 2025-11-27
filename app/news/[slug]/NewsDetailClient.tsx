'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import type { NewsPost } from '@/data/newsPosts';
import Link from 'next/link';

interface NewsDetailClientProps {
  post: NewsPost;
}

const NewsDetailClient: React.FC<NewsDetailClientProps> = ({ post }) => {
  const { t, language } = useLanguage();

  const getPostTitle = () => {
    return t.news.posts[post.translationKey as keyof typeof t.news.posts].title;
  };

  const getPostCategory = () => {
    return t.news.posts[post.translationKey as keyof typeof t.news.posts].category;
  };

  const getPostType = () => {
    return t.news.posts[post.translationKey as keyof typeof t.news.posts].type;
  };

  const content = language === 'en' ? post.contentEn : post.contentZh;

  return (
    <div className="w-full">
      {/* Back Button */}
      <section className="py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/news"
              className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 font-medium transition-colors"
            >
              ← {t.news.post.backToList}
            </Link>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Labels */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full">
                {getPostCategory()}
              </span>
              <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">
                {getPostType()}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark">
              {getPostTitle()}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div>
                <span className="font-semibold">{t.news.post.publishedOn}:</span>{' '}
                {post.publishedDate}
              </div>
              <div>
                <span className="font-semibold">{t.news.post.categoryLabel}:</span>{' '}
                {getPostCategory()}
              </div>
              <div>
                <span className="font-semibold">{t.news.post.typeLabel}:</span>{' '}
                {getPostType()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/news"
              className="inline-block px-8 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              {t.news.post.backToList}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailClient;

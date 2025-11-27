// app/news/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { newsPosts } from '@/data/newsPosts';
import NewsDetailClient from './NewsDetailClient';

// 明确告诉 Next：这个路由强制静态生成
export const dynamic = 'force-static';

// 为所有新闻生成静态路径
export function generateStaticParams() {
  return newsPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 不再给 props 强类型，避免 PageProps 约束冲突
export default function NewsDetailPage({ params }: any) {
  const post = newsPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <NewsDetailClient post={post} />;
}

// app/news/[slug]/page.tsx

// @ts-nocheck

import { notFound } from 'next/navigation';
import { newsPosts } from '@/data/newsPosts';
import NewsDetailClient from './NewsDetailClient';

// 按 Cloudflare 要求：非静态路由必须是 Edge Runtime
export const runtime = 'edge';

export default function NewsDetailPage(props: any) {
  const slug = props?.params?.slug as string;

  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return <NewsDetailClient post={post} />;
}

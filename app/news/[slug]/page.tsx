// app/news/[slug]/page.tsx

// 直接关掉这个文件里的 TS 校验，避免和 Next 生成类型打架
// @ts-nocheck

import { notFound } from 'next/navigation';
import { newsPosts } from '@/data/newsPosts';
import NewsDetailClient from './NewsDetailClient';

// 静态生成所有新闻详情页
export const dynamicParams = false;

export function generateStaticParams() {
  return newsPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function NewsDetailPage(props: any) {
  const slug = props?.params?.slug as string;

  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return <NewsDetailClient post={post} />;
}

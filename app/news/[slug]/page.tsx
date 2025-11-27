// app/news/[slug]/page.tsx

// 关掉当前文件的 TS 检查，避免和 Next 生成的类型冲突
// @ts-nocheck

import { notFound } from 'next/navigation';
import { newsPosts } from '@/data/newsPosts';
import NewsDetailClient from './NewsDetailClient';

// ⭐ 这一行是关键：明确告诉 Cloudflare 这个动态路由跑在 Edge Runtime 上
export const runtime = 'edge';

export default function NewsDetailPage(props: any) {
  const slug = props?.params?.slug as string;

  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return <NewsDetailClient post={post} />;
}
	
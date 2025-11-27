// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { newsPosts } from "@/data/newsPosts";
import NewsDetailClient from "./NewsDetailClient";

// 让 Cloudflare Pages 对这个动态路由使用 Edge Runtime
export const runtime = "edge";

// 动态生成 <title> / <meta description>
export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  const slug = params?.slug as string | undefined;
  const post = newsPosts.find((p) => p.slug === slug);

  const baseTitle = "News - Jackie Chen Group Limited";

  if (!post) {
    return {
      title: baseTitle,
    };
  }

  const anyPost = post as any;

  const enTitle =
    anyPost.titleEn ??
    anyPost.title?.en ??
    anyPost.title ??
    baseTitle;

  const enSummary =
    anyPost.summaryEn ??
    anyPost.summary?.en ??
    anyPost.summary ??
    "";

  return {
    title: `${enTitle} | Jackie Chen Group Limited`,
    description: enSummary || undefined,
  };
}

// 详情页组件
export default function NewsDetailPage({ params }: any) {
  const slug = params?.slug as string | undefined;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <NewsDetailClient post={post} />;
}

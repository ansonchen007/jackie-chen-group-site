import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsPosts } from "@/data/newsPosts";
import NewsDetailClient from "./NewsDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found — Jackie Chen Group Limited",
    };
  }

  return {
    title: `${post.excerptEn.split('.')[0]} — Jackie Chen Group Limited`,
    description: `${post.excerptEn} ${post.excerptZh}`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return <NewsDetailClient post={post} />;
}

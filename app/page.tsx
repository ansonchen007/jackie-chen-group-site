import type { Metadata } from "next";
import HomePageClient from "./_components/HomePageClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

export const metadata: Metadata = {
  title: "Jackie Chen Group Limited — Investment, Brand & Business Consulting",
  description:
    "Jackie Chen Group Limited is a Hong Kong–based multi-domain group providing investment support, brand management, F&B ventures, business consulting, advertising strategy and technology outsourcing. Jackie Chen 集团是一家总部位于香港的多领域企业，提供投资支持、品牌管理、餐饮项目运营、商业咨询、广告策略与技术外包服务。",
  alternates: {
    canonical: siteUrl ? siteUrl : undefined,
  },
};

export default function Page() {
  return <HomePageClient />;
}

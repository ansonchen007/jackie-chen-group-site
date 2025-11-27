import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "Insights & Updates — Jackie Chen Group Limited",
  description:
    "Read insights and updates from Jackie Chen Group Limited across brand strategy, F&B ventures, business growth, advertising and cross-market execution. 浏览 Jackie Chen 集团在品牌策略、餐饮项目、业务增长、广告与跨市场执行等主题下的精选文章与洞察内容。",
};

export default function Page() {
  return <NewsPageClient />;
}

import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us — Jackie Chen Group Limited",
  description:
    "Learn about Jackie Chen Group Limited, a Hong Kong–based multi-domain group working across investment, brand management, F&B ventures, business consulting, advertising strategy and technology outsourcing. 了解 Jackie Chen 集团的定位与愿景，包括投资支持、品牌管理、餐饮项目、商业咨询、广告策略及技术外包。",
};

export default function Page() {
  return <AboutPageClient />;
}

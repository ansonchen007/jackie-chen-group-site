import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services — Jackie Chen Group Limited",
  description:
    "Explore the services of Jackie Chen Group Limited, including investment support, brand management, F&B venture development, business consulting, advertising strategy and technology outsourcing. 查看 Jackie Chen 集团的服务范围，包括投资支持、品牌管理、餐饮项目开发、商业咨询、广告策略以及技术外包服务。",
};

export default function Page() {
  return <ServicesPageClient />;
}

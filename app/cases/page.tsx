import type { Metadata } from "next";
import CasesPageClient from "./CasesPageClient";

export const metadata: Metadata = {
  title: "Case Studies — Jackie Chen Group Limited",
  description:
    "Explore practical case studies from Jackie Chen Group Limited across investment, brand management, F&B ventures, technology outsourcing, business consulting and advertising strategy. 查看 Jackie Chen 集团的项目案例，包括投资、品牌管理、餐饮项目、技术外包、商业咨询及广告策略等多个领域的实际执行成果。",
};

export default function Page() {
  return <CasesPageClient />;
}

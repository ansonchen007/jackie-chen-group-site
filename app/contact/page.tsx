import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — Jackie Chen Group Limited",
  description:
    "Contact Jackie Chen Group Limited for business cooperation related to investment support, brand management, F&B ventures, consulting, advertising and technology outsourcing. 联系 Jackie Chen 集团，获取关于投资支持、品牌管理、餐饮项目、商业咨询、广告与技术外包等相关合作信息。",
};

export default function Page() {
  return <ContactPageClient />;
}

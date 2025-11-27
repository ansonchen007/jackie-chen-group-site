import type { Metadata } from "next";
import PrivacyPageClient from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy — Jackie Chen Group Limited",
  description:
    "Privacy Policy of Jackie Chen Group Limited. 本隐私政策适用于 Jackie Chen 集团，符合香港个人资料（私隐）条例（PDPO）的要求。",
};

export default function Page() {
  return <PrivacyPageClient />;
}

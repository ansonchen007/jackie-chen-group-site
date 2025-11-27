import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Service — Jackie Chen Group Limited",
  description:
    "Terms of Service for Jackie Chen Group Limited. 本服务条款适用于 Jackie Chen 集团的官方网站及相关服务。",
};

export default function Page() {
  return <TermsPageClient />;
}

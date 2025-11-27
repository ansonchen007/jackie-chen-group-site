import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jackie Chen Group Limited | Integrated Investment, Brand & F&B Partner",
  description: "Jackie Chen Group is a Hong Kong–based platform combining investment, brand management, F&B ventures, advertising, technology outsourcing and consulting to support long-term growth.",
  icons: {
    icon: [
      { url: "/logo/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/logo/favicon-128.png", sizes: "128x128", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

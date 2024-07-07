import "@/styles/base.css";
import "@/styles/reset.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Header from "@/components/layouts/header";
import Script from "next/script";

export const metadata: Metadata = {
  description: "umekikazuyaのPortfolioです。",
  title: "umekikazuya - Portfolio",
  openGraph: {
    title: "umekikazuya",
    type: "website",
    url: "https://umekikazuya.vercel.app/",
    locale: "ja_JP",
  },
  keywords: [
    "Portfolio",
    "umekikazuya",
    "Web",
    "Development",
    "Projects",
    "Skills",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "umekikazuya",
            url: "https://umekikazuya.vercel.app/",
            sameAs: [
              "https://twitter.com/umekikazuya",
              "https://github.com/kazuya_um_k_",
            ],
            jobTitle: "Web Developer",
          })}
        </Script>
        <Analytics mode={"production"} />
      </body>
    </html>
  );
}

import "@/styles/base.css";
import "@/styles/reset.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Header from "@/components/layouts/header";

export const metadata: Metadata = {
  description: 'umekikazuyaのPortfolioです。',
  title: 'Portfolio - umekikazuya',
  openGraph: {
    title: 'umekikazuya',
    type: 'website',
    url: 'https://umekikazuya.vercel.app/',
  },
}

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
          <main>
            {children}
          </main>
        </div>
        <Analytics mode={"production"} />
      </body>
    </html>
  );
}

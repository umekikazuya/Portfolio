import "destyle.css";
import { Analytics } from "@vercel/analytics/react";
import { Contact } from "@/components/features/contact/contact";
import { Header } from "@/components/features/header/header";
import Script from "next/script";
import StyledComponentsRegistry from "@/lib/registry";

type Props = Readonly<{
  children: React.ReactNode;
}>;

/**
 * アプリケーションのルートレイアウトを生成する非同期関数。
 *
 * この関数は、HTMLの基本構造内にヘッダー、メインコンテンツ（StyledComponentsRegistryでラップされた子要素）および連絡先コンポーネントを含むレイアウトを返します。また、構造化データを含むJSON-LDスクリプトも埋め込んでいます。
 *
 * @param children - レイアウト内に描画される子要素
 * @returns アプリケーションのルートレイアウトを表すReact要素
 */
export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Header />
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Contact />
        </main>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "umekikazuya",
            url: "https://www.umekikazuya.me/",
            sameAs: [
              "https://www.drupal.org/u/umekikazuya",
              "https://twitter.com/kazuya_um_k_",
              "https://github.com/umekikazuya",
            ],
            jobTitle: "Web Creator",
          })}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: "umekikazuya | Web Creator Portfolio",
  description:
    "umekikazuya's portfolio showcasing expertise in web development, Drupal, and Symfony.",
  keywords: [
    "umekikazuya",
    "Web Creator",
    "Portfolio",
    "Drupal",
    "Symfony",
    "PHP",
  ],
  openGraph: {
    title: "umekikazuya | Web Creator Portfolio",
    description:
      "Explore umekikazuya's web development projects, focusing on Drupal, Symfony, and PHP.",
    url: "https://www.umekikazuya.me/",
    siteName: "umekikazuya Portfolio",
    locale: "ja_JP",
    type: "website",
  },
};

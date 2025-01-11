import "@/styles/base.css";
import "@/styles/reset.css";
import { Analytics } from "@vercel/analytics/react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import LanguageSwitcher from "@/features/languageSwitcher/languageSwitcher";
import Script from "next/script";

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>;

export default async function Layout({ children, params }: Props) {
  // メッセージの取得
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="container">
            <main>
              <LanguageSwitcher />
              <div className="container__inner">{children}</div>
            </main>
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
              url: "https://www.umekikazuya.me/",
              sameAs: [
                "https://www.drupal.org/u/umekikazuya",
                "https://twitter.com/kazuya_um_k_",
                "https://github.com/umekikazuya",
              ],
              jobTitle: "Web Creator",
            })}
          </Script>
          <Analytics mode={"production"} />
        </NextIntlClientProvider>
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

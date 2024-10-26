import "@/styles/base.css";
import "@/styles/reset.css";
import { Analytics } from "@vercel/analytics/react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import LanguageSwitcher from "@/features/languageSwitcher/languageSwitcher";
import Script from "next/script";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
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
                'https://www.drupal.org/u/umekikazuya',
                "https://twitter.com/kazuya_um_k_",
                "https://github.com/umekikazuya",
              ],
              jobTitle: "Web Developer",
            })}
          </Script>
          <Analytics mode={"production"} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

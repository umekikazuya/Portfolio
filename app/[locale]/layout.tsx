import "@/styles/base.css";
import "@/styles/reset.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import LanguageSwitcher from "@/features/languageSwitcher/languageSwitcher";

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
              "@context": "https:schema.org",
              "@type": "Person",
              name: "umekikazuya",
              url: "https:umekikazuya.vercel.app/",
              sameAs: [
                "https:twitter.com/kazuya_um_k_",
                "https:github.com/umekikazuya",
              ],
              jobTitle: "Web Developer",
            })}
          </Script>
          {/* <Analytics mode={"production"} /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

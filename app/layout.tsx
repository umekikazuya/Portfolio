import Script from "next/script";
import StyledComponentsRegistry from "@/lib/registry";
import { Header } from "@/components/features/header/header";
import "destyle.css";
import { Contact } from "@/components/features/contact/contact";

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>;

export default async function RootLayout({ children, params }: Props) {
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
        {/* <Analytics mode={"production"} /> */}
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

import "@/styles/base.css";
import "@/styles/reset.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Header from "@/components/layouts/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Head>
        <title>Portfolio - umekikazuya</title>
        <meta name="description" content="Portfolio - umekikazuya" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Head>
      <body>
        <div className="container">
          <Header />
          <main>
            {children}
            {/* <MovingCircle color="#f2e0ff, #efdefb, #f2f2f2" />
            <MovingCircle color="#fae5af, #f9e8bd, #f6f2e7" /> */}
          </main>
        </div>
        <Analytics mode={"production"} />
      </body>
    </html>
  );
}

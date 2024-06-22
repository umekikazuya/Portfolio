import '@/components/global.css';
import Header from "@/components/layouts/header";
import { Container, Main } from '@/components/sharedstyles';
import MovingCircle from "@/features/circle/MovingCircle";
import Head from "next/head";

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
        <Container>
          <Header />
          <Main>
            {children}
            {/* <MovingCircle color="#f2e0ff, #efdefb, #f2f2f2" />
            <MovingCircle color="#fae5af, #f9e8bd, #f6f2e7" /> */}
          </Main>
        </Container>
      </body>
    </html>
  );
}

"use client";

import { HeroSection } from "@/components/features/home/hero";
import styled from "styled-components";

/**
 * ホームページのレイアウトをレンダリングします。
 *
 * このコンポーネントは、ヒーローセクションに続いて、スタイル付きのメインコンテンツ領域内で、指定されたプロフィールコンポーネントと記事コンテンツを表示します。
 *
 * @param profileComponent - コンテンツセクション内に配置するプロフィールコンポーネント。
 * @param articleComponent - コンテンツセクション内に配置する記事コンテンツ。
 * @returns ホームページのレイアウトを表す React 要素。
 */
export function HomeLayout({
  profileComponent,
  articleComponent,
}: {
  profileComponent: React.ReactNode;
  articleComponent: React.ReactNode;
}) {
  return (
    <>
      <HeroSection />
      <MainContent>
        <ContentSection>
          {profileComponent}
          {/* <SelectedWorks /> */}
          {articleComponent}
        </ContentSection>
      </MainContent>
    </>
  );
}

const MainContent = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;
`;

const ContentSection = styled.div`
  margin-top: -120px;
  position: relative;
  z-index: 2;
  background: white;
  border-radius: 32px 32px 0 0;
  padding: 64px 32px;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    margin-top: -60px;
    padding: 40px 20px;
  }
`;

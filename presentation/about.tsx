"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 160px 24px 80px;
`;

const PageHeader = styled.div`
  margin-bottom: 80px;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const PageDescription = styled.p`
  color: #666;
  font-size: 1.25rem;
  max-width: 600px;
  line-height: 1.6;
`;

/**
 * 「About」セクションのレイアウトを生成するReactコンポーネント。
 *
 * このコンポーネントは、フェードインおよびスライドアップするアニメーション付きのヘッダー（タイトルと説明文）を表示し、
 * 渡されたプロファイルコンポーネントをレイアウト内に配置します。
 *
 * @param profileComponent - レイアウト内にレンダリングするカスタムプロファイル要素
 */
export default function AboutLayout({
  profileComponent,
}: {
  profileComponent: React.ReactNode;
}) {
  return (
    <PageContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>About</PageTitle>
          <PageDescription>
            私のスキルや経歴、大切にしている価値観についてご紹介します。
          </PageDescription>
        </motion.div>
      </PageHeader>
      {profileComponent}
    </PageContainer>
  );
}

"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Code, Layers, Palette, Server, Globe, Github } from "lucide-react";
import { SiGithub } from "react-icons/si";

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

const Section = styled.section`
  margin-bottom: 120px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 40px;
`;

const ContentText = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 24px;
  max-width: 800px;
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const TechCard = styled(motion.div)`
  padding: 32px;
  border-radius: 20px;
  background: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TechIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: #000;
`;

const TechTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 16px;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 16px;
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.875rem;
  color: #666;

  &::before {
    content: "•";
    margin-right: 8px;
    color: #000;
  }
`;

const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #fafafa;
  color: #333;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-top: 24px;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const techStack = [
  {
    icon: <Code size={24} />,
    title: "フロントエンド",

    items: [
      "Next.js 15 (App Router)",
      "TypeScript",
      "Styled Components",
      "Framer Motion",
    ],
  },
  {
    icon: <Server size={24} />,
    title: "バックエンド",
    items: ["Laravel", "Vercel", "PostgreSQL", "REST API"],
  },
  // {
  //   icon: <Layers size={24} />,
  //   title: "アーキテクチャ",
  //   items: [
  //     "コンポーネントベース設計",
  //     "ページレイアウトシステム",
  //     "レスポンシブデザイン",
  //   ],
  // },
  // {
  //   icon: <Palette size={24} />,
  //   title: "デザイン",
  //   items: [
  //     "ミニマルデザイン",
  //     "アニメーションとトランジション",
  //     "ダークモード対応",
  //   ],
  // },
  {
    icon: <Globe size={24} />,
    title: "デプロイ",
    description: "Vercelを利用しています。",
    items: ["Vercel", "継続的デプロイ", "エッジネットワーク"],
  },
];

export default function AboutSitePage() {
  return (
    <PageContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>このサイトについて</PageTitle>
          <PageDescription>
            このポートフォリオサイトの目的と使用している技術について紹介します。
          </PageDescription>
        </motion.div>
      </PageHeader>

      {/* <Section>
        <SectionTitle>サイトの目的</SectionTitle>
        <ContentText>
          このサイトは、私のスキルや経験、制作物を紹介するためのポートフォリオとして制作しました。
          Web開発者として培ってきた技術力や、これまでの実績を視覚的に伝えることを目指しています。
          また、このサイト自体が私の技術力を示す作品の一つとなっています。
        </ContentText>
        <ContentText>
          訪問者の方々に私の人柄や仕事に対する姿勢、技術的な強みを理解していただき、
          潜在的なクライアントやチームメイトとの接点となることを期待しています。
          常に改善を続け、新しい技術や作品を追加していく予定です。
        </ContentText>
      </Section> */}

      <Section>
        <SectionTitle>技術スタック</SectionTitle>
        <TechStackGrid>
          {techStack.map((tech, index) => (
            <TechCard
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TechIconWrapper>{tech.icon}</TechIconWrapper>
              <TechTitle>{tech.title}</TechTitle>
              <TechList>
                {tech.items.map((item) => (
                  <TechItem key={item}>{item}</TechItem>
                ))}
              </TechList>
            </TechCard>
          ))}
        </TechStackGrid>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <SourceLink
            href={`https://github.com/${process.env.NEXT_PUBLIC_QITIA_ID}/portfolio`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={16} />
            ソースコードを見る
          </SourceLink>
        </motion.div>
      </Section>

      {/* <Section>
        <SectionTitle>今後の展望</SectionTitle>
        <ContentText>
          このポートフォリオサイトは継続的に改善と拡張を行っていく予定です。
          今後は以下のような機能やコンテンツの追加を検討しています：
        </ContentText>
        <TechList>
          <TechItem>ブログ機能の追加</TechItem>
          <TechItem>プロジェクト詳細ページの充実</TechItem>
          <TechItem>インタラクティブなデモの実装</TechItem>
          <TechItem>パフォーマンスの最適化</TechItem>
          <TechItem>多言語対応</TechItem>
        </TechList>
        <ContentText>
          また、フィードバックを積極的に取り入れ、ユーザー体験の向上に努めていきます。
          ご意見やご感想がありましたら、お問い合わせページからお気軽にご連絡ください。
        </ContentText>
      </Section> */}
    </PageContainer>
  );
}

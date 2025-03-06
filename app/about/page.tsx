"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Heart,
  Zap,
  Users,
  Code,
  RefreshCw,
  Lightbulb,
  Award,
} from "lucide-react";
import { JsonApi } from "@/model/jsonApi.model";
import { User } from "@/model/user.model";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";

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

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const ValueCard = styled(motion.div)`
  padding: 32px;
  border-radius: 20px;
  background: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ValueIconWrapper = styled.div`
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

const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 16px;
`;

const ValueDescription = styled.p`
  color: #666;
  font-size: 0.875rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const HobbiesContainer = styled.div`
  margin-bottom: 40px;
`;

const HobbyTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const HobbyTag = styled(motion.div)`
  padding: 10px 20px;
  border-radius: 20px;
  background: #fafafa;
  font-size: 0.875rem;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  gap: 48px;
`;

const SkillCategory = styled.div`
  margin-bottom: 24px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    height: 1px;
    flex: 1;
    background: #eee;
    margin-left: 16px;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillTag = styled(motion.div)`
  padding: 8px 16px;
  border-radius: 20px;
  background: #fafafa;
  font-size: 0.875rem;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const CertificationsContainer = styled.div`
  max-width: 800px;
`;

const CertificationList = styled.div`
  display: grid;
  gap: 24px;
`;

const CertificationItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  border-radius: 20px;
  background: #fafafa;
`;

const CertificationIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  flex-shrink: 0;
`;

const CertificationContent = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

const CertificationMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

const CertificationDate = styled.div`
  font-size: 0.75rem;
  color: #666;
`;

const CertificationIssuer = styled.div`
  font-size: 0.75rem;
  color: #666;
`;

const CertificationDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  line-height: 1.6;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #eee;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 64px;

  &::before {
    content: "";
    position: absolute;
    left: -32px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #000;
    transform: translateX(-50%);
  }
`;

const TimelinePeriod = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 8px;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 16px;
`;

const TimelineDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  position: relative;
  padding-left: 24px;
  color: #666;
  margin-bottom: 8px;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #000;
  }
`;

const values = [
  {
    icon: <Heart size={24} />,
    title: "よりよい体験の創出",
    description:
      '"クライアントが抱えている課題や悩み"の本質的な解決・"業務フロー改善のカイゼン"を通じて、よりよい体験を創出することが自身の目標です。技術的な制約よりもユーザーにとっての使いやすさを優先します。',
  },
  {
    icon: <Lightbulb size={24} />,
    title: "創造性",
    description:
      "技術力よりも発想の部分を重視しています。過去のベストプラクティスに拘らず、新しいアイデアを逐次的に生み出すことを心がけています。",
  },
  {
    icon: <Zap size={24} />,
    title: "キャッチアップ力",
    description: "キャッチアップ力が自身の強みだと自負しています。",
  },
  {
    icon: <Code size={24} />,
    title: "設計・コーディング",
    description:
      "拡張性・保守性を意識した設計を心がけ、コーディングにおいてはSOLID原則を徹底しています。",
  },
  {
    icon: <Users size={24} />,
    title: "利他的",
    description:
      "人に喜んで貰える時に仕事のやりがいを感じます。利他的な精神を心がけ、周囲の人々と協力して成果を出すことを心がけています。",
  },
  {
    icon: <RefreshCw size={24} />,
    title: "学習の継続",
    description:
      '"学習のための学習"は絶対しないと決めています。技術は目的のための手段にしか過ぎないと考えています。',
  },
];

const skills = {
  フロントエンド: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS/SCSS",
    "Tailwind CSS",
    "Styled Components",
    "Redux",
    "GraphQL",
  ],
  バックエンド: [
    "Symfony",
    "PHP",
    "Drupal",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "REST API",
  ],
  ツール: [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Figma",
    "JIRA",
    "Confluence",
  ],
};

const certifications = [
  {
    title: "アクイア認定デベロッパー取得",
    date: "2023年5月",
    issuer: "アクイア",
    description:
      "",
  },
  {
    title: "アクイア認定フロントエンドスペシャリスト取得",
    date: "2023年6月",
    issuer: "アクイア",
    description:
      "",
  },
  {
    title: "Acquia Triple Certified DrupalExpert 受賞",
    date: "2023年11月",
    issuer: "アクイア",
    description:
      "",
  },
];

const experiences = [
  {
    period: "2022 - 現在",
    title: "モチヤ株式会社",
    description: "https://www.mochiya.ad.jp/",
    achievements: [],
  },
  {
    period: "2021 - 2022",
    title: "ライオン株式会社",
    description: "https://www.lion.co.jp/",
    achievements: [],
  },
];

export default function AboutPage() {
  const [profile, setProfile] = useState<null | JsonApi<User>>(null);
  useEffect(() => {
    fetchData<JsonApi<User>>("/api/profile").then((data) => {
      setProfile(data);
    });
  }, []);

  if (!profile) return <></>;
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

      <Section>
        <SectionTitle>大事にしていること</SectionTitle>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ValueIconWrapper>{value.icon}</ValueIconWrapper>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      {/* 趣味 */}
      {profile.data.likes && (
        <Section>
          <SectionTitle>Likes</SectionTitle>
          <HobbiesContainer>
            <HobbyTags>
              {profile.data.likes.map((hobby, index) => (
                <HobbyTag
                  key={hobby}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  {hobby}
                </HobbyTag>
              ))}
            </HobbyTags>
          </HobbiesContainer>
        </Section>
      )}

      {/* スキル */}
      {profile.data.skill && (
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsContainer>
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <SkillCategory key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <SkillTags>
                  {items
                    .filter(
                      (skill) =>
                        profile.data.skill && profile.data.skill.includes(skill)
                    )
                    .map((skill, skillIndex) => (
                      <SkillTag
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.03,
                        }}
                      >
                        {skill}
                      </SkillTag>
                    ))}
                </SkillTags>
              </SkillCategory>
            ))}
          </SkillsContainer>
        </Section>
      )}

      <Section>
        <SectionTitle>資格・認定</SectionTitle>
        <CertificationsContainer>
          <CertificationList>
            {certifications.map((cert, index) => (
              <CertificationItem
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CertificationIcon>
                  <Award size={20} />
                </CertificationIcon>
                <CertificationContent>
                  <CertificationTitle>{cert.title}</CertificationTitle>
                  <CertificationMeta>
                    <CertificationDate>{cert.date}</CertificationDate>
                    <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                  </CertificationMeta>
                  <CertificationDescription>
                    {cert.description}
                  </CertificationDescription>
                </CertificationContent>
              </CertificationItem>
            ))}
          </CertificationList>
        </CertificationsContainer>
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.period}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TimelinePeriod>{exp.period}</TimelinePeriod>
              <TimelineTitle>{exp.title}</TimelineTitle>
              <TimelineDescription>{exp.description}</TimelineDescription>
              <AchievementList>
                {exp.achievements.map((achievement, i) => (
                  <AchievementItem key={i}>{achievement}</AchievementItem>
                ))}
              </AchievementList>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </PageContainer>
  );
}

"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fetchData } from "@/utils/api";
import { Article } from "@/model/article.model";
import { useEffect, useState } from "react";
import { Cp } from "@/model/cp.model";

const Section = styled.section`
  margin-bottom: 120px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ViewAll = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    color: #000;
    gap: 8px;
  }
`;

const ArticleList = styled.div`
  display: grid;
  gap: 24px;
`;

const ArticleCard = styled(motion.a)`
  display: block;
  padding: 32px;
  border-radius: 20px;
  background: #fafafa;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ArticleDate = styled.time`
  color: #666;
  font-size: 0.875rem;
`;

export function Articles() {
  const [articles, setArticles] = useState<null | Cp<Article>>(null);
  
  console.log(articles);
  

  useEffect(() => {
    fetchData<Cp<Article>>("/api/articles/pickup").then((data) => {
      setArticles(data);
    });
  }, []);
  if (!articles?.data) {
    return <></>;
  }
  return (
    <Section>
      <SectionHeader>
        <Title>Articles</Title>
        <ViewAll href="/article">
          View all
          <ArrowUpRight size={16} />
        </ViewAll>
      </SectionHeader>

      <ArticleList>
        {articles.data.map((article, index) => (
          <ArticleCard
            key={article.title}
            href={article.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleMeta>
              <ArticleDate>{article.published}</ArticleDate>
            </ArticleMeta>
          </ArticleCard>
        ))}
      </ArticleList>
    </Section>
  );
}

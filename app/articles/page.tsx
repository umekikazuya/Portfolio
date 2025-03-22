"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useServicesQuery } from "@/lib/hooks/useServicesQuery";
import { createSearchQuery } from "@/lib/services/createSearchQuery";
import { useArticlesQuery } from "@/lib/hooks/useArticlesQuery";

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

const FilterSection = styled.div`
  margin-bottom: 48px;
  display: grid;
  gap: 24px;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 48px;
  border-radius: 12px;
  border: none;
  background: #fafafa;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    background: #f5f5f5;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const FilterTab = styled.button<{ $isActive?: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  background: ${(props) => (props.$isActive ? "#000" : "#fafafa")};
  color: ${(props) => (props.$isActive ? "#fff" : "#666")};
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.$isActive ? "#000" : "#f0f0f0")};
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  gap: 32px;
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

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const ArticleDate = styled.time`
  color: #666;
  font-size: 0.875rem;
`;

const ArticlePlatform = styled.span`
  padding: 4px 12px;
  border-radius: 12px;
  background: #fff;
  font-size: 0.75rem;
  color: #666;
`;

/**
 * 記事一覧を表示するページコンポーネント。
 *
 * このコンポーネントは、選択された記事カテゴリに応じてAPIから記事データを非同期に取得し、
 * 取得中は「Loading...」を表示します。記事データが正常に取得できた場合は、ページヘッダー、フィルタタブ、
 * および記事カードのグリッドをアニメーション付きでレンダリングします.
 */
export default function Page() {
  return (
    <PageContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>Articles</PageTitle>
          <PageDescription>
            技術記事や日々の学びについて発信しています。
          </PageDescription>
        </motion.div>
      </PageHeader>
      <Contents />
    </PageContainer>
  );
}

// フィルターとコンテンツエリアコンポーネント
const Contents = () => {
  const [category, setCategory] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");
  const [keyword, setKeyword] = useState("");

  const { services } = useServicesQuery();
  const searchQuery = useMemo(
    () => createSearchQuery(category, keyword),
    [category, keyword]
  );
  const { articles, loading } = useArticlesQuery(searchQuery);

  const handleSearch = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") setKeyword(searchText);
    },
    [searchText]
  );

  return (
    <>
      <FilterSection>
        <SearchContainer>
          <SearchInput
            placeholder="検索..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
          />
          <SearchIcon>
            <Search size={20} />
          </SearchIcon>
        </SearchContainer>

        <FilterTabs>
          <FilterTab
            $isActive={category === null}
            onClick={() => setCategory(null)}
          >
            All
          </FilterTab>
          {services.map((service) => (
            <FilterTab
              key={service.id}
              $isActive={category === service.id}
              onClick={() => setCategory(service.id)}
            >
              {service.name}
            </FilterTab>
          ))}
        </FilterTabs>
      </FilterSection>

      <ArticleGrid>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {articles.map((article, index) => (
              <ArticleCard
                key={article.title}
                href={article.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleMeta>
                  <ArticleDate>
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </ArticleDate>
                  <ArticlePlatform>{article.service.name}</ArticlePlatform>
                </ArticleMeta>
              </ArticleCard>
            ))}
          </>
        )}
      </ArticleGrid>
    </>
  );
};

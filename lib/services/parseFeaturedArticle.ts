import { FeaturedArticle } from "@/domain/entities/featuredArticle";
import { createFeaturedArticleId } from "@/domain/valueObjects/featuredArticle";
import { Result } from "@/types/result";
import { parseArticle } from "./parseArticle";

export const parseFeaturedArticle = (raw: unknown): Result<FeaturedArticle, Error> => {
  if (typeof raw !== "object" || raw === null) {
    return {
      ok: false,
      error: new Error(
        `サービスデータが無効です。受け取った型: ${raw === null ? "null" : typeof raw
        }`
      ),
    };
  }

  const { id, article } = raw as Record<string, unknown>;

  // FeaturedArticleIdを生成
  const FeaturedArticleId = createFeaturedArticleId(id);
  if (!FeaturedArticleId.ok) return FeaturedArticleId;
  
  // Articleを生成
  const FeaturedArticleArticle = parseArticle(article);
  if (!FeaturedArticleArticle.ok) return FeaturedArticleArticle;

  // エンティティを返却
  const FeaturedArticle: FeaturedArticle = {
    id: FeaturedArticleId.value,
    article: FeaturedArticleArticle.value,
  };

  return { ok: true, value: FeaturedArticle };
};

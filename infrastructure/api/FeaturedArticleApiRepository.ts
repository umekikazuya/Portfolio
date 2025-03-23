import { Article } from "@/domain/entities/article";
import { FeaturedArticle } from "@/domain/entities/featuredArticle";
import { FeaturedArticleRepository } from "@/domain/repositories/FeaturedArticleRepository";
import { parseFeaturedArticle } from "@/lib/services/parseFeaturedArticle";
import { Result } from "@/types/result";

export class FeaturedArticleApiRepository implements FeaturedArticleRepository {
  async fetchAll(): Promise<Result<Article[], Error>> {
    try {
      const apiUrl = process.env.NEXT_BACKEND_API;
      if (!apiUrl) {
        return { ok: false, error: new Error("API URLが設定されていません。") };
      }
      const res = await fetch(`${apiUrl}/backend/featured-articles`, {
        headers: {
          Authorization: `Basic ${btoa(
            `${process.env.NEXT_BASIC_AUTH_USER}:${process.env.NEXT_BASIC_AUTH_PASSWORD}`
          )}`,
        },
      });
      if (!res.ok) {
        return { ok: false, error: new Error("APIエラーが発生しました。") };
      }
      const { data }: { data: unknown[] } = await res.json();

      if (!Array.isArray(data)) {
        return { ok: false, error: new Error("APIレスポンスが不正です。") };
      }

      const featuredArticles = data
        .map(parseFeaturedArticle)
        .filter((r): r is { ok: true; value: FeaturedArticle } => r.ok)
        .map((r) => r.value);

      const articles = featuredArticles.map((r) => r.article);

      return { ok: true, value: articles };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      return {
        ok: false,
        error: new Error(`通信エラーが発生しました。詳細: ${errorMessage}`),
      };
    }
  }
}

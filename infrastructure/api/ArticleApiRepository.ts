import { Article } from "@/domain/entities/article";
import { ArticleRepository } from "@/domain/repositories/ArticleRepository";
import { parseArticle } from "@/lib/services/parseArticle";
import { Result } from "@/types/result";

export class ArticleApiRepository implements ArticleRepository {
  async fetchAll(): Promise<Result<Article[], Error>> {
    try {
      const apiUrl = process.env.NEXT_BACKEND_API;
      if (!apiUrl) {
        return { ok: false, error: new Error("API URLが設定されていません。") };
      }
      const res = await fetch(`${apiUrl}/backend/article?is_pickup=1`);
      if (!res.ok) {
        return { ok: false, error: new Error("APIエラーが発生しました。") };
      }
      const { data }: { data: unknown[] } = await res.json();

      if (!Array.isArray(data)) {
        return { ok: false, error: new Error("APIレスポンスが不正です。") };
      }

      const articles = data
        .map(parseArticle)
        .filter((r): r is { ok: true; value: Article } => r.ok)
        .map((r) => r.value);

      return { ok: true, value: articles };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return { ok: false, error: new Error(`通信エラーが発生しました。詳細: ${errorMessage}`) };
    }
  }
}

import { Service } from "@/domain/entities/service";
import { ServiceRepository } from "@/domain/repositories/ServiceRepository";
import { createBasicAuthHeader } from "@/lib/services/auth";
import { parseService } from "@/lib/services/parseService";
import { Result } from "@/types/result";

export class ServiceApiRepository implements ServiceRepository {
  async fetchAll(): Promise<Result<Service[], Error>> {
    try {
      const apiUrl = process.env.NEXT_BACKEND_API;
      if (!apiUrl) {
        return { ok: false, error: new Error("API URLが設定されていません。") };
      }
      const res = await fetch(`${apiUrl}/backend/article-services`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: createBasicAuthHeader() || "",
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
        .map(parseService)
        .filter((r): r is { ok: true; value: Service } => r.ok)
        .map((r) => r.value);

      return { ok: true, value: featuredArticles };
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

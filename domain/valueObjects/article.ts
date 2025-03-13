import { Result } from "@/types/result";

export type Branded<T, B> = T & { _brand: B };

export type ArticleId = Branded<number, "ArticleId">;
export type ArticleContent = Branded<string | null, "ArticleContent">;
export type ArticleTitle = Branded<string, "ArticleTitle">;
export type ArticleLink = Branded<string, "ArticleLink">;
export type ArticleService = Branded<string, "ArticleService">;
export type ArticlePublished = Branded<Date, "ArticlePublished">;

export function createArticleId(id: unknown): Result<ArticleId, Error> {
  if (typeof id === "number") {
    return id > 0
      ? { ok: true, value: id as ArticleId }
      : { ok: false, error: new Error("無効なID") };
  }
  if (typeof id === "string" && /^\d+$/.test(id)) {
    const parsed = parseInt(id, 10);
    return parsed > 0
      ? { ok: true, value: parsed as ArticleId }
      : { ok: false, error: new Error("無効なID") };
  }
  return { ok: false, error: new Error("無効なID") };
}

export const createArticleContent = (
  content: unknown
): Result<ArticleContent, Error> => {
  const parsed = typeof content === "string" ? content : null;
  return parsed === null || parsed.trim().length > 0
    ? { ok: true, value: parsed as ArticleContent }
    : { ok: false, error: new Error("無効な本文") };
};

export function createArticleTitle(
  title: unknown
): Result<ArticleTitle, Error> {
  const parsed = typeof title === "string" ? title : "";
  return parsed.trim().length > 0
    ? { ok: true, value: parsed as ArticleTitle }
    : { ok: false, error: new Error("タイトルが空です") };
}

export function createArticleLink(link: unknown): Result<ArticleLink, Error> {
  const parsed = typeof link === "string" ? link : "";
  return /^https?:\/\/\S+$/.test(parsed)
    ? { ok: true, value: parsed as ArticleLink }
    : { ok: false, error: new Error("無効なリンク") };
}

export function createArticleService(
  service: unknown
): Result<ArticleService, Error> {
  const parsed = typeof service === "string" ? service : "";
  return parsed.trim().length > 0
    ? { ok: true, value: parsed as ArticleService }
    : { ok: false, error: new Error("無効なサービス名") };
}

export function createArticlePublished(
  published: unknown
): Result<ArticlePublished, Error> {
  if (typeof published !== "string") {
    return {
      ok: false,
      error: new Error("公開日は文字列である必要があります。"),
    };
  }
  // 日付と時間の間のスペースを 'T' に置き換える
  const parts = published.split(/\s+/);
  const isoDateString = parts.length >= 2
    ? `${parts[0]}T${parts.slice(1).join(' ')}`
    : published;
  const localDate = new Date(isoDateString);

  if (isNaN(localDate.getTime())) {
    return { ok: false, error: new Error("無効な公開日") };
  }

  // UTC に変換
  const utcDate = new Date(
    Date.UTC(
      localDate.getFullYear(),
      localDate.getMonth(),
      localDate.getDate(),
      localDate.getHours(),
      localDate.getMinutes(),
      localDate.getSeconds()
    )
  );

  return { ok: true, value: utcDate as ArticlePublished };
}

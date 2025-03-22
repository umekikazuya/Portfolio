import { Branded } from "@/types/branded";
import { Result } from "@/types/result";

export type ArticleId = Branded<number, "ArticleId">;
export type ArticleContent = Branded<string | null, "ArticleContent">;
export type ArticleTitle = Branded<string, "ArticleTitle">;
export type ArticleLink = Branded<string, "ArticleLink">;
export type ArticlePublished = Branded<Date, "ArticlePublished">;
export type ArticleStatus = Branded<'draft' | 'published', "ArticleStatus">;

/**
 * Validates and constructs a branded ArticleId from the provided input.
 *
 * The function checks whether the input is a number or a string representing a number,
 * and returns a branded ArticleId if the parsed value is a positive number. Otherwise,
 * it returns an error with the message "無効なID".
 *
 * @param id - The input to validate as an ArticleId; can be a number or a numeric string.
 * @returns A Result containing a branded ArticleId if the input is valid, or an error if not.
 */
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

/**
 * Validates and constructs a branded ArticleTitle.
 *
 * Checks whether the provided title is a non-empty string (after trimming whitespace). If valid, returns a Result
 * with the branded ArticleTitle; otherwise, returns an error indicating that the title is empty.
 *
 * @param title - The input value to validate as an article title.
 * @returns A Result containing the branded ArticleTitle on success or an error if the title is empty.
 */
export function createArticleTitle(
  title: unknown
): Result<ArticleTitle, Error> {
  const parsed = typeof title === "string" ? title : "";
  return parsed.trim().length > 0
    ? { ok: true, value: parsed as ArticleTitle }
    : { ok: false, error: new Error("タイトルが空です") };
}

/**
 * Validates the input as a URL and creates a branded ArticleLink.
 *
 * Interprets the provided input as a string and checks if it matches the URL format
 * starting with "http://" or "https://". If the input is a valid URL, returns a success
 * result with the branded ArticleLink; otherwise, returns an error result with the message "無効なリンク".
 *
 * @param link - The value to validate as a URL. Non-string values are treated as invalid.
 * @returns A result containing the ArticleLink if valid, or an Error if the URL is invalid.
 *
 * @example
 * const result = createArticleLink("https://example.com");
 * if (result.ok) {
 *   console.log("Valid link:", result.value);
 * } else {
 *   console.error("Invalid link:", result.error);
 * }
 */
export function createArticleLink(link: unknown): Result<ArticleLink, Error> {
  const parsed = typeof link === "string" ? link : "";
  return /^https?:\/\/\S+$/.test(parsed)
    ? { ok: true, value: parsed as ArticleLink }
    : { ok: false, error: new Error("無効なリンク") };
}

/**
 * Parses a date string, converts it to a UTC Date, and returns it as a branded ArticlePublished.
 *
 * This function expects the publication date to be provided as a string. It first replaces any space with "T" to form an ISO-compliant date string,
 * then attempts to create a local Date object. If the date is invalid or the input is not a string, an error is returned in the result.
 * Otherwise, the local date is converted to UTC and returned as a branded ArticlePublished.
 *
 * @param published - The publication date as a string.
 * @returns A result containing the branded ArticlePublished on success, or an error if validation fails.
 */
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
    ? `${parts[0]}T${parts.slice(1).join('')}`
    : published;
  const localDate = new Date(isoDateString);

  if (isNaN(localDate.getTime())) {
    return { ok: false, error: new Error("無効な公開日") };
  }

  // タイムゾーン情報が含まれているか確認
  if (published.includes('Z') || /[+-]\d{2}:\d{2}/.test(published)) {
    // タイムゾーン情報があれば、それを尊重する
    return { ok: true, value: localDate as ArticlePublished };
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

/**
 * Article status
 */
export const createArticleStatus = (
  status: unknown
): Result<ArticleStatus, Error> => {
  const parsed = typeof status === "string" ? status : null;
  return parsed === 'draft' || parsed === 'published'
    ? { ok: true, value: parsed as ArticleStatus }
    : { ok: false, error: new Error("無効なステータス") };
};

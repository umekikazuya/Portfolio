import { Result } from "@/types/result";

export type Branded<T, B> = T & { _brand: B };

// ArticleId
export type ArticleId = Branded<string, "ArticleId">;
export const createArticleId = (id: string): Result<ArticleId, Error> => {
  if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
    return { ok: false, error: new Error("無効なArticleIdです") };
  }
  return { ok: true, value: id as ArticleId };
};

// ArticleSlug
export type ArticleSlug = Branded<string, "ArticleSlug">;
export const createArticleSlug = (slug: string): Result<ArticleSlug, Error> => {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { ok: false, error: new Error("無効なスラッグです") };
  }
  return { ok: true, value: slug as ArticleSlug };
};

// ArticleTitle
export type ArticleTitle = Branded<string, "ArticleTitle">;
export const createArticleTitle = (
  title: string
): Result<ArticleTitle, Error> => {
  if (title.trim().length === 0) {
    return { ok: false, error: new Error("タイトルが空です") };
  }
  return { ok: true, value: title as ArticleTitle };
};

// ArticleContent
export type ArticleContent = Branded<string, "ArticleContent">;
export const createArticleContent = (
  content: string
): Result<ArticleContent, Error> => {
  if (content.trim().length === 0) {
    return { ok: false, error: new Error("コンテンツが空です") };
  }
  return { ok: true, value: content as ArticleContent };
};

// ArticleLink
export type ArticleLink = Branded<string, "ArticleLink">;
export const createArticleLink = (link: string): Result<ArticleLink, Error> => {
  if (!/^https?:\/\//.test(link)) {
    return { ok: false, error: new Error("無効なURLです") };
  }
  return { ok: true, value: link as ArticleLink };
};

// PublishDate（ISO形式）
export type ArticlePublishDate = Branded<string, "PublishDate">;
export const createPublishDate = (
  dateString: string
): Result<ArticlePublishDate, Error> => {
  if (isNaN(Date.parse(dateString))) {
    return { ok: false, error: new Error("無効な日付形式です") };
  }
  return { ok: true, value: dateString as ArticlePublishDate };
};

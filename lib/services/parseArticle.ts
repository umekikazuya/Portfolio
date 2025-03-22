import { Article } from "@/domain/entities/article";
import {
  createArticleContent,
  createArticleId,
  createArticleLink,
  createArticleTitle,
  createArticlePublished,
  createArticleStatus,
} from "@/domain/valueObjects/article";
import { Result } from "@/types/result";
import { parseService } from "./parseService";

export const parseArticle = (raw: unknown): Result<Article, Error> => {
  if (typeof raw !== "object" || raw === null) {
    return {
      ok: false,
      error: new Error(
        `記事データが無効です。受け取った型: ${raw === null ? "null" : typeof raw
        }`
      ),
    };
  }

  const { id, title, content, link, created_at, status, service } = raw as Record<
    string,
    unknown
  >;

  // ArticleIdを生成
  const articleId = createArticleId(id);
  if (!articleId.ok) return articleId;

  // ArticleTitleを生成
  const articleTitle = createArticleTitle(title);
  if (!articleTitle.ok) return articleTitle;

  // ArticleContentを生成
  const articleContent = createArticleContent(content);
  if (!articleContent.ok) return articleContent;

  // ArticleLinkを生成
  const articleLink = createArticleLink(link);
  if (!articleLink.ok) return articleLink;

  // PublishDateを生成
  const articleDate = createArticlePublished(created_at);
  if (!articleDate.ok) return articleDate;
  
  // ArticleStatusを生成
  const articleStatus = createArticleStatus(status);
  if (!articleStatus.ok) return articleStatus;
  
  // Serviceを生成
  const serviceResult = parseService(service);
  if (!serviceResult.ok) return serviceResult;

  // エンティティを返却
  const article: Article = {
    id: articleId.value,
    title: articleTitle.value,
    content: articleContent.value,
    link: articleLink.value,
    publishedAt: articleDate.value,
    status: articleStatus.value,
    service: serviceResult.value,
  };

  return { ok: true, value: article };
};

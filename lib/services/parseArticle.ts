
import { Article } from '@/domain/entities/article';
import { createArticleContent, createArticleId, createArticleLink, createArticleSlug, createArticleTitle, createPublishDate } from '@/domain/valueObjects/article';
import { Result } from '@/types/result';

export const parseArticle = (raw: unknown): Result<Article, Error> => {
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, error: new Error('記事データが無効です。') };
  }

  const { id, title, content, link, published } = raw as Record<string, unknown>;

  // ArticleIdを生成
  const articleId = createArticleId(String(id));
  if (!articleId.ok) return articleId;

  // ArticleTitleを生成
  const articleTitle = createArticleTitle(String(title));
  if (!articleTitle.ok) return articleTitle;

  // ArticleContentを生成
  const articleContent = createArticleContent(String(content));
  if (!articleContent.ok) return articleContent;
  
  // ArticleLinkを生成
  const articleLink = createArticleLink(String(link));
  if (!articleLink.ok) return articleLink;

  // PublishDateを生成
  const articleDate = createPublishDate(String(published));
  if (!articleDate.ok) return articleDate;

  // エンティティを返却
  const article: Article = {
    id: articleId.value,
    title: articleTitle.value,
    content: articleContent.value,
    link: articleLink.value,
    publishedAt: articleDate.value,
  };

  return { ok: true, value: article };
}

import { ArticleContent, ArticleId, ArticleSlug, ArticleTitle, ArticlePublishDate, ArticleLink } from '../valueObjects/article';

export interface Article {
  id: ArticleId;
  title: ArticleTitle;
  content: ArticleContent;
  link: ArticleLink;
  publishedAt: ArticlePublishDate;
}

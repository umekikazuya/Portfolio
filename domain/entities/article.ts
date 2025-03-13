import {
  ArticleContent,
  ArticleId,
  ArticleTitle,
  ArticleLink,
  ArticlePublished,
} from "../valueObjects/article";

export interface Article {
  id: ArticleId;
  title: ArticleTitle;
  content: ArticleContent;
  link: ArticleLink;
  publishedAt: ArticlePublished;
}

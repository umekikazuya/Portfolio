import {
  ArticleContent,
  ArticleId,
  ArticleTitle,
  ArticleLink,
  ArticlePublished,
  ArticleStatus,
} from "../valueObjects/article";
import { Service } from "./service";

export interface Article {
  id: ArticleId;
  title: ArticleTitle;
  content: ArticleContent;
  link: ArticleLink;
  publishedAt: ArticlePublished;
  status: ArticleStatus;
  service: Service
}

import { FeaturedArticleId } from "../valueObjects/featuredArticle";
import { Article } from "./article";

export interface FeaturedArticle {
  id: FeaturedArticleId;
  article: Article;
}

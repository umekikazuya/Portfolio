import { Result } from "@/types/result";
import { Article } from "../entities/article";

export interface FeaturedArticleRepository {
  fetchAll(): Promise<Result<Article[], Error>>;
}

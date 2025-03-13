import { Result } from "@/types/result";
import { Article } from "../entities/article";

export interface ArticleRepository {
  fetchAll(): Promise<Result<Article[], Error>>;
}

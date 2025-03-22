import { Result } from "@/types/result";
import { Article } from "../entities/article";

export interface ArticleRepository {
  fetchAll(
    serviceId: null | number,
  ): Promise<Result<Article[], Error>>;
}

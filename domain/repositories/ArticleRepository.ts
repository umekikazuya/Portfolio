import { Result } from "@/types/result";
import { Article } from "../entities/article";

export interface ArticleRepository {
  fetchAll(
    keyword: null | string,
    serviceId: null | number,
  ): Promise<Result<Article[], Error>>;
}

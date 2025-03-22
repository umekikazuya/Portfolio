import { ArticleRepository } from "@/domain/repositories/ArticleRepository";
import { Article } from "../entities/article";

export class GetArticlesInteractor {
  constructor(private repository: ArticleRepository) {}

  /**
   * 検索を実行
   * @param keyword - 検索キーワード
   * @param serviceId - サービスID
   * @returns
   */
  async handle(
    keyword: null | string,
    serviceId: null | number
  ): Promise<Article[]> {
    const result = await this.repository.fetchAll(keyword, serviceId);

    if (!result.ok) {
      throw result.error;
    }
    return result.value;
  }
}

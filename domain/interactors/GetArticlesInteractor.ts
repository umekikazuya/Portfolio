import { ArticleRepository } from '@/domain/repositories/ArticleRepository';
import { Article } from '../entities/article';

export class GetArticlesInteractor {
  constructor(private repository: ArticleRepository) { }

  /**
   * 検索を実行
   * @returns 
   */
  async handle(
    serviceId: null | number,
  ): Promise<Article[]> {
    console.log(serviceId);
    
    const result = await this.repository.fetchAll(serviceId);
    
    if (!result.ok) {
      throw result.error;
    }
    return result.value;
  }
}

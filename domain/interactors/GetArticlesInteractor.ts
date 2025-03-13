import { ArticleRepository } from '@/domain/repositories/ArticleRepository';
import { Article } from '../entities/article';

export class GetArticlesInteractor {
  constructor(private repository: ArticleRepository) { }

  async handle(): Promise<Article[]> {
    const result = await this.repository.fetchAll();
    if (!result.ok) {
      throw result.error;
    }
    return result.value;
  }
}

import { Article } from '../entities/article';
import { FeaturedArticleRepository } from '../repositories/FeaturedArticleRepository';

export class GetFeaturedArticlesInteractor {
  constructor(private repository: FeaturedArticleRepository) { }

  async handle(): Promise<Article[]> {
    const result = await this.repository.fetchAll();
    if (!result.ok) {
      throw result.error;
    }
    return result.value;
  }
}

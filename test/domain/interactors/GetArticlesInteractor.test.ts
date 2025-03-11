import { Article } from "@/domain/entities/article";
import { ArticleRepository } from "@/domain/repositories/ArticleRepository";
import { GetArticlesInteractor } from "@/domain/repositories/GetArticlesInteractor";
import { ArticleContent, ArticleId, ArticleLink, ArticlePublishDate, ArticleSlug, ArticleTitle } from "@/domain/valueObjects/article";

describe('GetArticlesInteractor', () => {
  let mockRepository: ArticleRepository;

  beforeEach(() => {
    mockRepository = {
      fetchAll: jest.fn()
    };
  });

  test('正常に記事を取得できること', async () => {
    const articles: Article[] = [
      {
        id: 'id1' as ArticleId,
        slug: 'article-1' as ArticleSlug,
        title: '記事1' as ArticleTitle,
        content: 'コンテンツ' as ArticleContent,
        link: 'https://example.com/article-1' as ArticleLink,
        publishedAt: '2025-03-01' as ArticlePublishDate
      }
    ];

    (mockRepository.fetchAll as jest.Mock).mockResolvedValue({ ok: true, value: articles });

    const interactor = new GetArticlesInteractor(mockRepository);
    const result = await interactor.handle();

    expect(result).toEqual(articles);
  });

  test('記事の取得に失敗した場合、エラーをスローする', async () => {
    const error = new Error('API通信エラー');

    (mockRepository.fetchAll as jest.Mock).mockResolvedValue({ ok: false, error });

    const interactor = new GetArticlesInteractor(mockRepository);

    await expect(interactor.handle()).rejects.toThrow('API通信エラー');
  });
});

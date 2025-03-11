import { GetArticlesInteractor } from "@/domain/repositories/GetArticlesInteractor";
import { ArticleApiRepository } from "@/infrastructure/api/ArticleApiRepository";
import { ArticleList } from "./ArticleList";

export async function ArticleContainer() {
  const repository = new ArticleApiRepository();
  const interactor = new GetArticlesInteractor(repository);

  const articles = await interactor.handle();

  return <ArticleList articles={articles} />;
}

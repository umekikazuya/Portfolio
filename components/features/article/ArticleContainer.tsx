import { GetArticlesInteractor } from "@/domain/interactors/GetArticlesInteractor";
import { ArticleApiRepository } from "@/infrastructure/api/ArticleApiRepository";
import { ArticleList } from "./ArticleList";

export async function ArticleContainer() {
  const repository = new ArticleApiRepository();
  const interactor = new GetArticlesInteractor(repository);

  try {
    const articles = await interactor.handle();
    return <ArticleList articles={articles} />;
  } catch (error) {
    return <></>;
  }
}

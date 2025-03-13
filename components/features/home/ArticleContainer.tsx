import { GetArticlesInteractor } from "@/domain/interactors/GetArticlesInteractor";
import { ArticleApiRepository } from "@/infrastructure/api/ArticleApiRepository";
import { ArticleSection } from "./ArticleSection";

export async function ArticleContainer() {
  const repository = new ArticleApiRepository();
  const interactor = new GetArticlesInteractor(repository);
  try {
    const articles = await interactor.handle();
    return <ArticleSection articles={articles} />;
  } catch (error) {
    return <></>;
  }

}

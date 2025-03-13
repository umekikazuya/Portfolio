import { GetArticlesInteractor } from "@/domain/interactors/GetArticlesInteractor";
import { ArticleApiRepository } from "@/infrastructure/api/ArticleApiRepository";
import { ArticleList } from "./ArticleList";

/**
 * Retrieves articles asynchronously and renders them within the ArticleList component.
 *
 * This function creates an instance of ArticleApiRepository and a corresponding GetArticlesInteractor to fetch articles.
 * Once the articles are retrieved, it returns a JSX element that renders the ArticleList component with the fetched articles.
 *
 * @returns A JSX element displaying the list of articles.
 */
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

import { ArticleSection } from "./ArticleSection";
import { GetFeaturedArticlesInteractor } from "@/domain/interactors/GetFeaturedArticlesInteractor";
import { FeaturedArticleApiRepository } from "@/infrastructure/api/FeaturedArticleApiRepository";

/**
 * Asynchronously loads articles and renders the ArticleSection component.
 *
 * This function initializes an article API repository and an interactor to retrieve articles asynchronously via the interactor's handle method.
 * The retrieved articles are then passed as props to the ArticleSection component, which is returned as a JSX element.
 *
 * @returns A JSX element rendering the article section with the retrieved articles.
 */
export async function ArticleContainer() {
  const repository = new FeaturedArticleApiRepository();
  const interactor = new GetFeaturedArticlesInteractor(repository);
  try {
    const articles = await interactor.handle();
    
    return <ArticleSection articles={articles} />;
  } catch (error) {
    return <></>;
  }

}

import { ArticleContainer } from "@/components/features/home/ArticleContainer";
import { HomeLayout } from "@/presentation/home";

/**
 * Renders the page layout.
 *
 * This asynchronous component returns a JSX fragment that renders the HomeLayout component, which is configured with an ArticleContainer as its article content. The simplified structure reflects a streamlined layout approach.
 *
 * @returns A JSX element representing the page layout.
 */
export default async function Page() {
  return (
    <>
      <HomeLayout articleComponent={<ArticleContainer />} />
    </>
  );
}

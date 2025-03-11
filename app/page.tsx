import { ArticleContainer } from "@/components/features/home/ArticleContainer";
import { HomeLayout } from "@/presentation/home";

export default async function Page() {
  return (
    <>
      <HomeLayout articleComponent={<ArticleContainer />} />
    </>
  );
}

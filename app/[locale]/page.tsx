import { Article } from "@/model/article.model";
import { Cp } from "@/model/cp.model";
import { fetchData } from "@/utils/api";
import Contact from "@/features/subcontent/contact";
import FeatureArticle from "@/components/features/article/featureArticle";
import Profile from "@/components/features/profile/profileBlock";
import style from "./page.module.css";

const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/backend/article?is_pickup=1`;

export default async function Page() {
  const data = await fetchData<Cp<Article>>(ENDPOINT);

  if (!data) {
    return <></>;
  }
  if (!data.data) {
    return <></>;
  }

  return (
    <>
      <Profile />
      <div className={style.article}>
        <FeatureArticle articles={data.data} />
      </div>
      <div className={style.article}>
        <Contact />
      </div>
    </>
  );
}

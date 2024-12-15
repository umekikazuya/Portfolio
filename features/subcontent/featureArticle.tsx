import { Article } from "@/model/article.model";
import { CategorizedListItem } from "@/components/elements/list";
import { Cp } from "@/model/cp.model";
import { fetchData } from "@/utils/api";
import { NavigateButton } from "@/components/elements/button";
import Header from "./header";
import Layout from "./layout";
import { getTranslations } from "next-intl/server";

const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/backend/article?is_pickup=1`;

export default async function FeatureArticle() {
  const t_1 = await getTranslations("LanguageSettings");
  const t_2 = await getTranslations("Article");
  const data = await fetchData<Cp<Article>>(ENDPOINT);
  
  if (!data?.data) {
    return <></>;
  }
  
  return (
    <Layout
      header={
        <Header
          title={t_2("subcontent_label")}
          subTitle={
            <NavigateButton
              label={t_2("subcontent_link")}
              url={`/${t_1("lang")}/article`}
              size="s"
            />
          }
        />
      }
      body={
        <>
          <ul>
            {data?.data?.map((item, index) => (
              <CategorizedListItem
                key={index}
                title={item.title}
                link={item.link}
                published={item.published}
                type={item.service || ''}
              />
            ))}
          </ul>
        </>
      }
    />
  );
}

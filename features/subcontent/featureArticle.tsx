import { Article } from "@/model/article.model";
import { CategorizedListItem } from "@/components/elements/list";
import { Cp } from "@/model/cp.model";
import { fetchData } from "@/utils/api";
import { JsonApiRef } from "@/model/jsonApi.model";
import { NavigateButton } from "@/components/elements/button";
import Header from "./header";
import Layout from "./layout";
import { getTranslations } from "next-intl/server";

const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/api/cp/feature-article?include=field_ref_article&fields[]config_pages--feature_ar[]=changed&fields[]article--mochiya[]=title,field_link,field_created&fields[]article--qiita[]=title,field_link,field_created&fields[]article--zenn[]=title,field_link,field_created`;

export default async function FeatureArticle() {
  const t_1 = await getTranslations("LanguageSettings");
  const t_2 = await getTranslations("Article");
  const data = await fetchData<JsonApiRef<Cp, Article>>(ENDPOINT);
  if (!data) {
    return <></>;
  }

  return (
    <Layout
      header={
        <Header
          title={t_2('subcontent_label')}
          subTitle={<NavigateButton label={t_2('subcontent_link')} url={`/${t_1('lang')}/article`} size="s" />}
        />
      }
      body={
        <>
          <ul>
            {data?.included.map((item, index) => (
              <CategorizedListItem
                key={index}
                title={item.attributes.title}
                link={item.attributes.field_link.uri}
                published={item.attributes.field_created}
                type={item.type}
              />
            ))}
          </ul>
        </>
      }
    />
  );
}

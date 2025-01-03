import { Feed as FeedType } from "@/model/feed.model";
import { fetchData } from "@/utils/api";
import { ListItem } from "@/components/elements/list";
import { NavigateButton } from "@/components/elements/button";
import Header from "./header";
import Layout from "./layout";

const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/backend/qiita/${process.env.NEXT_PUBLIC_QITIA_ID}`;

export default async function Qiita() {
  const data = await fetchData<FeedType>(ENDPOINT);
  
  if (!data) {
    return <></>;
  }

  return (
    <Layout
      header={
        <Header
          title="Qiita"
          subTitle={
            <NavigateButton label="Qiitaへ" url={data?.link} size="s" />
          }
        />
      }
      body={
        <>
          <ul>
            {data?.data.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                link={item.link}
                published={item.published}
              />
            ))}
          </ul>
        </>
      }
    />
  );
}

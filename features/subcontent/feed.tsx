import { Feed as FeedType } from "@/model/feed.model";
import { ListItem } from "@/components/elements/list";
import { NavigateButton } from "@/components/elements/button";
import Header from "./header";
import Layout from "./layout";

const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/api/qiita/feed/${process.env.NEXT_PUBLIC_QITIA_ID}`;

async function fetchData() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

export default async function Feed() {
  const data: FeedType = await fetchData();

  return (
    <Layout
      header={
        <Header
          title={data.title}
          subTitle={<NavigateButton label="Qiitaへ" url={data.link} size="s" />}
        />
      }
      body={
        <>
          <ul>
            {data.data.map((item, index) => (
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

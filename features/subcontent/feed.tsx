import { Feed as FeedType } from "@/model/feed.model";
import { ListItem } from "@/components/elements/list";
import { NavigateButton } from "@/components/elements/button";
import Header from "./header";
import Layout from "./layout";

interface FeedProps {
  feed: FeedType;
}

export default function Feed({ feed }: FeedProps) {
  return (
    <Layout
      header={
        <Header
          title={feed.title}
          subTitle={<NavigateButton label="Qiitaへ" url={feed.link} size="s" />}
        />
      }
      body={
        <>
          <ul>
            {feed.data.map((item, index) => (
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

import { Feed as FeedType } from "@/model/feed.model";
import { fetchData } from "@/utils/api";
import Profile from "@/features/front/profile";
import style from "@/components/tmp.module.css";
import Feed from "@/features/subcontent/feed";
import Contact from "@/features/subcontent/contact";

export default async function Page() {
  const feed = await loader();

  return (
    <div className={style.container}>
      <Profile />
      {feed && <Feed feed={feed} />}
      <Contact />
    </div>
  );
}

async function loader() {
  const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/api/qiita/feed/${process.env.NEXT_PUBLIC_QITIA_ID}`;
  const feed = await fetchData<FeedType>(ENDPOINT);
  return feed;
}

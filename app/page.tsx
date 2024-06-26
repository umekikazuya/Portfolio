import { Feed } from "@/model/feed.model";
import { fetchData } from "@/utils/api";
import Contact from "@/features/front/contact";
import Profile from "@/features/front/profile";
import style from "@/components/tmp.module.css";
import Widget from "@/features/front/widget";

export default async function Page() {
  const feed = await loader();

  return (
    <div className={style.container}>
      <Profile />
      {feed ? <Widget feed={feed} /> : ""}
      <Contact />
    </div>
  );
}

async function loader() {
  const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/api/qiita/feed/${process.env.NEXT_PUBLIC_QITIA_ID}`;
  const feed = await fetchData<Feed>(ENDPOINT);
  return feed;
}

"use client";

import { fetchData } from "@/utils/api";
import style from "@/components/tmp.module.css";
import { useEffect, useState } from "react";
import { Feed } from "@/model/feed.model";

const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/api/qiita/feed/${process.env.NEXT_QITIA_ID}`;

export default function Widget() {
  const [feed, setFeed] = useState<Feed | null>(null);

  useEffect(() => {
    async function loadFeed() {
      const feed = await fetchData<Feed>(
        ENDPOINT
      );
      setFeed(feed);
    }
    loadFeed();
  }, []);

  return (
    <div className={style.widget_wrapper}>
      <div className={style.widget_header}>
        <h3 className={style.widget_header_title}>Qiita更新情報</h3>
        <a href={feed ? feed.url : '#'} target="_blank" rel="noopener noreferrer">
          Qiitaへ
        </a>
      </div>
      <div className={style.widget_content}>
        {feed ? (
          <ul className="p-rss-feed__wrapper">
            {feed.data.map((item, index) => (
              <li key={index} className={style.widget_content_li}>
                <a
                  className={style.widget_content_li_a}
                  href={item.link}
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  <span className={style.widget_content_li_title}>
                    {item.title}
                  </span>
                  <time
                    dateTime={item.published}
                    className={style.widget_content_li_tile}
                  >
                    {new Date(item.published).toLocaleDateString("ja-JP")}
                  </time>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
}

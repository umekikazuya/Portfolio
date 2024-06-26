import style from "@/components/tmp.module.css";
import { Feed } from "@/model/feed.model";

export default function Widget({ feed }: { feed: Feed }) {
  return (
    <div className={style.widget_wrapper}>
      <div className={style.widget_header}>
        <h3 className={style.widget_header_title}>Qiita</h3>
        <button type="button" className={style.widget_button}>
          <span className={style.widget_button_inner}>Qiitaへ</span>
          <div className={style.widget_button_cover}></div>
        </button>
      </div>
      <div className={style.widget_content}>
        {feed ? (
          <ul className={style.widget_content_list}>
            {feed.data.map((item, index) => (
              <li key={index} className={style.widget_content_li}>
                <a
                  className={style.widget_content_li_a}
                  href={item.link}
                  target="_blank" rel="noreferrer"
                >
                  <span className={style.widget_content_li_title}>
                    {item.title}
                  </span>
                  <time
                    dateTime={item.published}
                    className={style.widget_content_li_time}
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

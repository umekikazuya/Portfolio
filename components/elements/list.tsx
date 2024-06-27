import { FeedElement } from "@/model/feed.model";
import style from "@/components/elements/list.module.css";

export function ListItem({ title, link, published }: FeedElement) {
  return (
    <li className={style.li}>
      <a className={style.li_link} href={link} target="_blank" rel="noreferrer">
        <span className={style.li_link__title}>{title}</span>
        <time dateTime={published} className={style.li_link__time}>
          {new Date(published).toLocaleDateString("ja-JP")}
        </time>
      </a>
    </li>
  );
}

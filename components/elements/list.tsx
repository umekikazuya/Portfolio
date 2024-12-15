import Link from "next/link";
import style from "@/components/elements/list.module.css";

interface ListItemProps {
  title: string;
  link: string;
  published: string;
}

interface CategorizedListItemProps extends ListItemProps {
  type: string;
}

export function ListItem({ title, link, published }: ListItemProps) {
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

export function CategorizedListItem({
  title,
  link,
  published,
  type,
}: CategorizedListItemProps) {
  return (
    <li className={style.li}>
      <Link className={style.li_link} href={link} target="_blank" rel="noreferrer">
        <span className={style.li_link__title}>{title}</span>
        <span>
          <span className={style.li_link__category}>{type}</span>
          <time dateTime={published} className={style.li_link__time}>
            {new Date(published).toLocaleDateString("ja-JP")}
          </time>
        </span>
      </Link>
    </li>
  );
}

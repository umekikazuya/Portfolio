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
    <a className={style.link} href={link} target="_blank" rel="noreferrer">
      <span className={style.link__title}>{title}</span>
      <time dateTime={published} className={style.link__time}>
        {new Date(published).toLocaleDateString("ja-JP")}
      </time>
    </a>
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
      <Link className={style.link} href={link} target="_blank" rel="noreferrer">
        <span className={style.link__title}>{title}</span>
        <span>
          <span className={style.link__category}>{type}</span>
          <time dateTime={published} className={style.link__time}>
            {new Date(published).toLocaleDateString("ja-JP")}
          </time>
        </span>
      </Link>
    </li>
  );
}

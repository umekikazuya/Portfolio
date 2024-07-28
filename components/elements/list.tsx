import style from "@/components/elements/list.module.css";

interface ListItemProps {
  title: string;
  link: string;
  published: string;
}

interface CategorizedListItemProps extends ListItemProps {
  type: string;
}

const getServiceName = (type: string): string => {
  const serviceMap: { [key: string]: string } = {
    "article--qiita": "Qiita",
    "article--zenn": "Zenn",
    "article--mochiya": "Mochiya",
  };
  return serviceMap[type] || "Unknown";
};

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
  const serviceName = getServiceName(type);
  return (
    <li className={style.li}>
      <a className={style.li_link} href={link} target="_blank" rel="noreferrer">
        <span className={style.li_link__title}>{title}</span>
        <span>
          <span className={style.li_link__category}>{serviceName}</span>
          <time dateTime={published} className={style.li_link__time}>
            {new Date(published).toLocaleDateString("ja-JP")}
          </time>
        </span>
      </a>
    </li>
  );
}

import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import style from "./breadcrumb.module.css";

type BreadcrumbItem = {
  label: string;
  url?: string;
};

type BreadcrumbProps = {
  links: BreadcrumbItem[];
};

export function Breadcrumb({ links }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className={style.wrapper}>
      <ol className={style.breadcrumb}>
        {links.map((link, index) => (
          <li key={index} className={style.breadcrumbItem}>
            {link.url ? (
              <Link href={link.url}>
                <span className={style.breadcrumbLink}>{link.label}</span>
              </Link>
            ) : (
              <span className={style.breadcrumbText}>{link.label}</span>
            )}
            {index < links.length - 1 && (
              <FiChevronRight className={style.breadcrumbIcon} />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

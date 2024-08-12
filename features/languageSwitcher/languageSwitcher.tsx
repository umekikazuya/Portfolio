"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./languageSwitcher.module.css";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const getNewPathname = (newLocale: string) => {
    return pathname.replace(new RegExp(`^/${locale}`), `/${newLocale}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.switcher}>
        <Link
          href={getNewPathname("en")}
          locale="en"
          className={`${styles.button} ${locale === "en" ? styles.active : ""}`}
        >
          EN
        </Link>
        <Link
          href={getNewPathname("ja")}
          locale="ja"
          className={`${styles.button} ${locale === "ja" ? styles.active : ""}`}
        >
          JA
        </Link>
      </div>
    </div>
  );
}

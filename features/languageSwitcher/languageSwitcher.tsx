"use client";

import { useRouter } from "next/navigation";
import styles from "./languageSwitcher.module.css";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    const currentUrl = new URL(window.location.href);
    const newPathname = currentUrl.pathname.replace(
      new RegExp(`^/${locale}`),
      `/${newLocale}`
    );
    router.replace(
      new URL(newPathname + currentUrl.search, currentUrl.origin).toString()
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.switcher}>
        <button
          className={`${styles.button} ${locale === "en" ? styles.active : ""}`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className={`${styles.button} ${locale === "ja" ? styles.active : ""}`}
          onClick={() => changeLanguage("ja")}
        >
          JA
        </button>
      </div>
    </div>
  );
}

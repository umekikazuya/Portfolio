import Link from "next/link";
import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  url: string;
  size: "s" | "m" | "l";
};

export function NavigateButton({ label, url, size }: ButtonProps) {
  const innerClassName = `${styles.buttonInner} ${
    size === "m" ? styles.buttonInnerM : ""
  }`;

  return (
    <Link href={url} passHref className={styles.button}>
      <span className={innerClassName}>{label}</span>
      <div className={styles.buttonCover}></div>
    </Link>
  );
}

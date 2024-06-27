import style from "./header.module.css";

interface HeaderProps {
  title: string;
  subTitle?: React.ReactNode;
}

export default function Header({ title, subTitle }: HeaderProps) {
  return (
    <div className={style.header}>
      <h3 className={style.header__title}>{title}</h3>
      {subTitle && <>{subTitle}</>}
    </div>
  );
}

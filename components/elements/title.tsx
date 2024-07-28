import style from "@/components/elements/title.module.css";

interface PageTitleProps {
  title: string;
  subTitle?: React.ReactNode;
}

export function PageTitle({ title, subTitle }: PageTitleProps) {
  return (
    <>
      <h1 className={style.title}>{title}</h1>
      {subTitle && <div className={style.content}>{subTitle}</div>}
    </>
  );
}

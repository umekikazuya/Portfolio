import style from "@/components/elements/title.module.css";

interface PageTietleProps {
  title: string;
  subTitle?: React.ReactNode;
}

export function PageTitle({ title, subTitle }: PageTietleProps) {
  return (
    <>
      <h1 className={style.title}>{title}</h1>
      <div className={style.content}>{subTitle}</div>
    </>
  );
}

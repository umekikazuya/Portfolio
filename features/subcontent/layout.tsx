import style from "./layout.module.css";

interface LayoutProps {
  header: React.ReactNode;
  body: React.ReactNode;
}

export default function Layout({ header, body }: LayoutProps) {
  return (
    <div className={style.layout}>
      {header}
      <div className={style.layout_body}>{body}</div>
    </div>
  );
}

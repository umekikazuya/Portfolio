import style from "./layout.module.css";

export default function Layout({
  header,
  body,
}: {
  header: React.ReactNode;
  body: React.ReactNode;
}) {
  return (
    <div className={style.layout}>
      {header}
      <div className={style.layout_body}>{body}</div>
    </div>
  );
}

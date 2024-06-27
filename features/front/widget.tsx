import { Feed } from "@/model/feed.model";
import { NavigateButton } from "@/components/elements/button";
import style from "@/components/tmp.module.css";
import { ListItem } from "@/components/elements/list";

export default function Widget({ feed }: { feed: Feed }) {
  return (
    <div className={style.subcontent_wrapper}>
      <div className={style.subcontent_header}>
        <h3 className={style.subcontent_header__title}>Qiita</h3>
        <NavigateButton label="Qiitaへ" url={feed.url} size="s" />
      </div>
      <ul className={style.subcontent_body}>
        {feed ? (
          <>
            {feed.data.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                link={item.link}
                published={item.published}
              />
            ))}
          </>
        ) : (
          <><li className={style.subcontent_body__empty}>現在取得できません。</li></>
        )}
      </ul>
    </div>
  );
}

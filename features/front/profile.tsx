import { FaGithub } from "react-icons/fa";
import { fetchData } from "@/utils/api";
import { getTranslations } from "next-intl/server";
import { JsonApi } from "@/model/jsonApi.model";
import { ProfileMultipleItems, ProfileSingleItem } from "./profileItem";
import { SiDrupal, SiQiita, SiZenn } from "react-icons/si";
import { User } from "@/model/user.model";
import style from "@/features/front/profile.module.css";

export default async function Profile() {
  const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/backend/profile`;
  const t = await getTranslations("Profile");
  const user = await fetchData<JsonApi<User>>(ENDPOINT);
  if (!user?.data) {
    return <></>;
  }

  return (
    <>
      <div className={style.profile}>
        {/* <img src="/src/assets/profile.jpg" alt="" width={80} height={80} /> */}
        <div className={style.name}>
          <span className={style.nameEn}>{user?.data.displayName}</span>
          <span className={style.nameJa}>{user?.data.displayShortName}</span>
        </div>
        {user?.data.job ? (
          <ProfileSingleItem label={t("job")} data={user?.data.job} />
        ) : (
          ""
        )}
        {user?.data.address ? (
          <ProfileSingleItem label={t("address")} data={user?.data.address} />
        ) : (
          ""
        )}
        {user?.data.from ? (
          <ProfileSingleItem label={t("from")} data={user?.data.from} />
        ) : (
          ""
        )}
        {user?.data.skills?.length ? (
          <ProfileMultipleItems label={t("skill")} data={user?.data.skills} />
        ) : (
          ""
        )}
        {user?.data.likes?.length ? (
          <ProfileMultipleItems label={t("like")} data={user?.data.likes} />
        ) : (
          ""
        )}
        <span className={style.item}>
          <span className={style.itemLabel}>{t("links")}</span>
          <ul className={style.itemText}>
            <li className={style.link__item}>
              <a
                href="https://www.drupal.org/u/umekikazuya"
                className={style.links_list__item_inner}
              >
                <SiDrupal size={16} color={"#757575"} />
              </a>
            </li>
            <li className={style.link__item}>
              <a
                href="https://github.com/umekikazuya"
                className={style.links_list__item_inner}
              >
                <FaGithub size={16} color={"#757575"} />
              </a>
            </li>
            <li className={style.link__item}>
              <a
                href="https://qiita.com/umekikazuya"
                className={style.links_list__item_inner}
              >
                <SiQiita size={16} color={"#757575"} />
              </a>
            </li>
            <li className={style.link__item}>
              <a
                href="https://zenn.dev/kazu_u"
                className={style.links_list__item_inner}
              >
                <SiZenn size={16} color={"#757575"} />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
}

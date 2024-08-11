import { FaGithub } from "react-icons/fa";
import { fetchData } from "@/utils/api";
import { JsonApi } from "@/model/jsonApi.model";
import { ProfileMultipleItems, ProfileSingleItem } from "./profileItem";
import { SiDrupal, SiQiita, SiZenn } from "react-icons/si";
import { User } from "@/model/user.model";
import style from "@/features/front/profile.module.css";
import { getTranslations } from "next-intl/server";

export default async function Profile() {
  const t = await getTranslations("Profile");
  const t_api = await getTranslations("LanguageSettings");
  const ENDPOINT = `${process.env.NEXT_DRUPAL_API}${t_api(
    "api"
  )}/api/user/user/${process.env.NEXT_DRUPAL_USER_UUID}`;
  const user = await fetchData<JsonApi<User>>(ENDPOINT);

  return (
    <>
      <div className={style.profile}>
        {/* <img src="/src/assets/profile.jpg" alt="" width={80} height={80} /> */}
        <div className={style.name}>
          <span className={style.nameEn}>
            {user?.data.attributes.field_display_name}
          </span>
          <span className={style.nameJa}>
            {user?.data.attributes.field_display_short_name}
          </span>
        </div>
        {user?.data.attributes.field_job ? (
          <ProfileSingleItem
            label={t("job")}
            data={user?.data.attributes.field_job}
          />
        ) : (
          ""
        )}
        {user?.data.attributes.field_address ? (
          <ProfileSingleItem
            label={t("address")}
            data={user?.data.attributes.field_address}
          />
        ) : (
          ""
        )}
        {user?.data.attributes.field_from ? (
          <ProfileSingleItem
            label={t("from")}
            data={user?.data.attributes.field_from}
          />
        ) : (
          ""
        )}
        {user?.data.attributes.field_skill?.length ? (
          <ProfileMultipleItems
            label={t("skill")}
            data={user?.data.attributes.field_skill}
          />
        ) : (
          ""
        )}
        {user?.data.attributes.field_like?.length ? (
          <ProfileMultipleItems
            label={t("links")}
            data={user?.data.attributes.field_like}
          />
        ) : (
          ""
        )}
        <span className={style.item}>
          <span className={style.itemLabel}>Links</span>
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

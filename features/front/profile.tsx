import { User } from "@/model/user.model";
import style from "@/features/front/profile.module.css";
import { SiDrupal, SiQiita, SiZenn } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { ProfileMultipleItems, ProfileSingleItem } from "./profileItem";

const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/jsonapi/user/user/${process.env.NEXT_DRUPAL_USER_UUID}`;

async function fetchData() {
  const response = await fetch(ENDPOINT, { cache: "no-store" });
  if (!response.ok) {
    return false;
  }
  const data = await response.json();
  return data;
}

export default async function Profile() {
  const user: User = await fetchData();

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
          <ProfileSingleItem label="Job" data={user?.data.attributes.field_job} />
        ) : (
          ""
        )}
        {user?.data.attributes.field_address ? (
          <ProfileSingleItem label="Address" data={user?.data.attributes.field_address} />
        ) : (
          ""
        )}
        {user?.data.attributes.field_from ? (
          <ProfileSingleItem label="From" data={user?.data.attributes.field_from} />
        ) : (
          ""
        )}
        {user?.data.attributes.field_skill?.length ? (
          <ProfileMultipleItems label="Skill" data={user?.data.attributes.field_skill} />
        ) : (
          ""
        )}
        {user?.data.attributes.field_like?.length ? (
          <ProfileMultipleItems label="Like" data={user?.data.attributes.field_like} />
        ) : (
          ""
        )}
        <ul className={style.link}>
          <li className={style.link__item}>
            <a href="https://www.drupal.org/u/umekikazuya" className={style.links_list__item_inner}>
              <SiDrupal size={16} color={"#757575"} />
            </a>
          </li>
          <li className={style.link__item}>
            <a href="https://github.com/umekikazuya" className={style.links_list__item_inner}>
              <FaGithub size={16} color={"#757575"} />
            </a>
          </li>
          <li className={style.link__item}>
            <a href="https://qiita.com/umekikazuya" className={style.links_list__item_inner}>
              <SiQiita size={16} color={"#757575"} />
            </a>
          </li>
          <li className={style.link__item}>
            <a href="https://zenn.dev/kazu_u" className={style.links_list__item_inner}>
              <SiZenn size={16} color={"#757575"} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

import { FaGithub } from "react-icons/fa";
import { fetchData } from "@/utils/api";
import { ProfileMultipleItems, ProfileSingleItem } from "./profileItem";
import { SiDrupal, SiQiita, SiZenn } from "react-icons/si";
import { User } from "@/model/user.model";
import style from "@/features/front/profile.module.css";

export default async function Profile() {
  const ENDPOINT = `${process.env.NEXT_DRUPAL_API}profile.json`;
  const user = await fetchData<User>(ENDPOINT);

  return (
    <>
      <div className={style.profile}>
        {/* <img src="/src/assets/profile.jpg" alt="" width={80} height={80} /> */}
        <div className={style.name}>
          <span className={style.nameEn}>
            {user?.displayName}
          </span>
          <span className={style.nameJa}>
            {user?.displayShortName}
          </span>
        </div>
        {user?.job ? (
          <ProfileSingleItem
            label={("job")}
            data={user?.job}
          />
        ) : (
          ""
        )}
        {user?.address ? (
          <ProfileSingleItem
            label={("address")}
            data={user?.address}
          />
        ) : (
          ""
        )}
        {user?.from ? (
          <ProfileSingleItem
            label={("from")}
            data={user?.from}
          />
        ) : (
          ""
        )}
        {user?.skills?.length ? (
          <ProfileMultipleItems
            label={("skill")}
            data={user?.skills}
          />
        ) : (
          ""
        )}
        {user?.likes?.length ? (
          <ProfileMultipleItems
            label={("links")}
            data={user?.likes}
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

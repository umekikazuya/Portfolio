import { User } from "@/model/user.model";
import style from "@/components/tmp.module.css";

const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/jsonapi/user/user/${process.env.NEXT_DRUPAL_USER_UUID}`;

async function fetchData() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
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
          <span className={style.item}>
            <span className={style.itemLabel}>Job</span>
            <span className={style.itemText}>
              {user?.data.attributes.field_job}
            </span>
          </span>
        ) : (
          ""
        )}
        {user?.data.attributes.field_address ? (
          <span className={style.item}>
            <span className={style.itemLabel}>Address</span>
            <span className={style.itemText}>
              {user?.data.attributes.field_address}
            </span>
          </span>
        ) : (
          ""
        )}
        {user?.data.attributes.field_from ? (
          <span className={style.item}>
            <span className={style.itemLabel}>From</span>
            <span className={style.itemText}>
              {user?.data.attributes.field_from}
            </span>
          </span>
        ) : (
          ""
        )}
        {user?.data.attributes.field_skill?.length ? (
          <span className={style.item}>
            <span className={style.itemLabel}>Skill</span>
            <span className={style.itemValues}>
              {user?.data.attributes.field_skill.map((o, i) => (
                <span className={style.itemValue} key={i}>
                  {o}
                </span>
              ))}
            </span>
          </span>
        ) : (
          ""
        )}
        {user?.data.attributes.field_like?.length ? (
          <span className={style.item}>
            <span className={style.itemLabel}>Like</span>
            <span className={style.itemValues}>
              {user?.data.attributes.field_like.map((o, i) => (
                <span className={style.itemValue} key={i}>
                  {o}
                </span>
              ))}
            </span>
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

"use client";

import style from "@/components/tmp.module.css";
import { fetchData } from "@/utils/api";
import { log } from "console";
import { env } from "process";
import { useEffect, useState } from "react";

interface UserData {
  data: {
    attributes: {
      field_address: string | null;
      field_display_name: string | null;
      field_display_short_name: string | null;
      field_from: string | null;
      field_github: string | null;
      field_introduction: string | null;
      field_job: string | null;
      field_like: Array<string>;
      field_qiita: string | null;
      field_skill: Array<string>;
      field_summary_introduction: string | null;
      field_zenn: string | null;
    };
  };
}

export default function Page() {
  // Set useState.
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setLoading] = useState(true);

  // User's Endpoint.
  const ENDPOINT_USERDATA = `${process.env.NEXT_DRUPAL_API}/jsonapi/user/user/${process.env.NEXT_DRUPAL_USER_UUID}`;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData<UserData>(ENDPOINT_USERDATA);
        if (!data) {
          throw new Error("データの取得に失敗しました。");
        }
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [ENDPOINT_USERDATA]);

  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>No profile data</p>;

  return (
    <div className={style.container}>
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
      {/* <ComingSoon>
        <CSHeading>Comming soon...</CSHeading>
        <CSBody>もう少し待ってね</CSBody>
      </ComingSoon> */}
    </div>
  );
}

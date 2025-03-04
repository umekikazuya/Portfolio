import { FaGithub } from "react-icons/fa";
import { fetchData } from "@/utils/api";
import { getTranslations } from "next-intl/server";
import { JsonApi } from "@/model/jsonApi.model";
import { ProfileMultipleItems, ProfileSingleItem } from "./profileItem";
import { SiDrupal, SiQiita, SiZenn } from "react-icons/si";
import { BsPen } from "react-icons/bs";
import { User } from "@/model/user.model";
import style from "@/features/front/profile.module.css";

export default async function Profile() {
  // const ENDPOINT = `${process.env.NEXT_DRUPAL_API}/backend/profile`;
  // const user = await fetchData<JsonApi<User>>(ENDPOINT);
  // console.log(user);

  // if (!user?.data) {
  //   return <></>;
  // }

  return (
    <>
      <div>
        <div>Kazuya Umeki</div>
        <div>@umekikazuya</div>
      </div>
      <div>
        <div>
          <BsPen />
          <div>Web Creator</div>
        </div>
        <div>
          <BsPen />
          <div>From Fukuoka</div>
        </div>
        <div>
          <BsPen />
          <div>Address Tokyo</div>
        </div>
        <div>
          <h3>LIKES</h3>
          <ul>
            <li>Mr.Children</li>
            <li>Mr.Children</li>
            <li>Mr.Children</li>
          </ul>
        </div>
      </div>
    </>
  );
}

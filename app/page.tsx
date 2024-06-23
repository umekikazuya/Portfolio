import Profile from "@/features/circle/profile";
import style from "@/components/tmp.module.css";

export default async function Page() {

  return (
    <div className={style.container}>
      <Profile />
      {/* <ComingSoon>
        <CSHeading>Comming soon...</CSHeading>
        <CSBody>もう少し待ってね</CSBody>
      </ComingSoon> */}
    </div>
  );
}

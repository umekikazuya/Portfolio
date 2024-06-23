import style from "@/components/tmp.module.css";
import Contact from "@/features/front/contact";
import Profile from "@/features/front/profile";

export default function Page() {
  return (
    <div className={style.container}>
      <Profile />
      <Contact />
      {/* <ComingSoon>
        <CSHeading>Comming soon...</CSHeading>
        <CSBody>もう少し待ってね</CSBody>
      </ComingSoon> */}
    </div>
  );
}

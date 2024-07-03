import { Suspense } from "react";
import Contact from "@/features/subcontent/contact";
import Empty from "@/features/subcontent/empty";
import Feed from "@/features/subcontent/feed";
import Profile from "@/features/front/profile";
import style from "@/components/tmp.module.css";

export default async function Page() {
  return (
    <div className={style.container}>
      <Profile />
      <Suspense fallback={<Empty label="Qiita" />}>
        <Feed />
      </Suspense>
      <Contact />
    </div>
  );
}

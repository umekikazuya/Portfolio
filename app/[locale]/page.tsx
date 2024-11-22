import { Suspense } from "react";
import Contact from "@/features/subcontent/contact";
import Empty from "@/features/subcontent/empty";
import Profile from "@/features/front/profile";
import Qiita from "@/features/subcontent/qiita";

export default async function Page() {

  return (
    <>
      <Suspense fallback={<Empty label="Profile" />}>
        <Profile />
      </Suspense>
      <Suspense fallback={<Empty label="Qiita" />}>
        <Qiita />
      </Suspense>
      <Contact />
    </>
  );
}

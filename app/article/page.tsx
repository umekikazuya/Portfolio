import { PageTitle } from "@/components/elements/title";
import { Suspense } from "react";
import Contact from "@/features/subcontent/contact";
import Empty from "@/features/subcontent/empty";
import Qiita from "@/features/subcontent/qiita";
import Zenn from "@/features/subcontent/zenn";
import { Breadcrumb } from "@/components/elements/breadcrumb";

const links = [
  { label: "Home", url: "/" },
  { label: "Article" },
];


export default async function Page() {
  return (
    <>
      <Breadcrumb links={links} />
      <PageTitle title="記事一覧" subTitle={
        <>
          各サービスで執筆している記事をまとめました。<br />
          お時間が許すのであれば、覗いていただければ幸いです。
        </>
      } />
      <Suspense fallback={<Empty label="Qiita" />}>
        <Qiita />
      </Suspense>
      <Suspense fallback={<Empty label="Zenn" />}>
        <Zenn />
      </Suspense>
      <Contact />
    </>
  );
}

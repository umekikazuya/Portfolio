import { PageTitle } from "@/components/elements/title";
import { Suspense } from "react";
import Contact from "@/features/subcontent/contact";
import Empty from "@/features/subcontent/empty";
import Qiita from "@/features/subcontent/qiita";
import Zenn from "@/features/subcontent/zenn";
import { Breadcrumb } from "@/components/elements/breadcrumb";
import { getTranslations } from "next-intl/server";

const links = [
  { label: "Home", url: "/" },
  { label: "Article" },
];


export default async function Page() {
  const t = await getTranslations("Article");
  return (
    <>
      <Breadcrumb links={links} />
      <PageTitle title={t('title')} subTitle={
        <>
          {t('description')}
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

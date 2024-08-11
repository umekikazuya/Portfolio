import { NavigateButton } from "@/components/elements/button";
import Header from "./header";
import Layout from "./layout";
import style from "@/features/subcontent/contact.module.css";
import { useTranslations } from "next-intl";

const contactURL = process.env.NEXT_PUBLIC_CONTACT_URL ?? "";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <>
      <Layout
        header={<Header title={t('title')} />}
        body={
          <>
            <p className={style.contact_description}>
              {t('body')}
            </p>
            <div className={style.contact_button_wrapper}>
              <NavigateButton label={t('button')} url={contactURL} size="m" />
            </div>
          </>
        }
      />
    </>
  );
}

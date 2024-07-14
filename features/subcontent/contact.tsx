import { NavigateButton } from "@/components/elements/button";
import style from "@/features/subcontent/contact.module.css";
import Layout from "./layout";
import Header from "./header";

const contactURL = process.env.NEXT_PUBLIC_CONTACT_URL ?? "";

export default function Contact() {
  return (
    <>
      <Layout
        header={<Header title="Get In Touch" />}
        body={
          <>
            <p className={style.contact_description}>
              開発・制作についてや、とりあえず話したい方、興味あればご連絡ください！！
            </p>
            <div className={style.contact_button_wrapper}>
              <NavigateButton label="Say Hello" url={contactURL} size="m" />
            </div>
          </>
        }
      />
    </>
  );
}

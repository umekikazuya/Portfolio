import { NavigateButton } from "@/components/elements/button";
import style from "@/components/tmp.module.css";

const contactURL = process.env.NEXT_PUBLIC_CONTACT_URL ?? "";

export default function Contact() {
  return (
    <>
      <div className={style.widget_wrapper}>
        <div className={style.widget_header}>
          <h3 className={style.widget_header_title}>Get In Touch</h3>
        </div>
        <div className={style.widget_content}>
          <div className={style.widget_content_list}>
            <p className={style.contact_description}>
              開発・制作についてや、とりあえず話したい方、興味あればご連絡ください！！
            </p>
            <div className={style.button_wrapper}>
              <NavigateButton label="Say Hello" url={contactURL} size="m" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

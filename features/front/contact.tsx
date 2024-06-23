"use client"

import style from "@/components/tmp.module.css";
import { useRouter } from "next/navigation";

const contactURL = process.env.NEXT_PUBLIC_CONTACT_URL ?? '';

export default function Contact() {
  const router = useRouter();
  
  console.log(process.env.NEXT_PUBLIC_CONTACT_URL);

  const handleClick = () => {
    router.push(contactURL);
  }

  return (
    <>
      <div className={style.contact_wrapper}>
        <div className={style.contact_title}>Get In Touch</div>
        <p className={style.contact_description}>開発・制作についてや、とりあえず話したい方、興味あればご連絡ください！！</p>
        <button className={style.contact_button} onClick={handleClick}>
            Say Hello
          <div className={style.contact_button_cover} />
        </button>
      </div>
    </>
  );
}

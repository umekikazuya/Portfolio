import Header from "./header";
import Image from "next/image";
import Layout from "./layout";
import style from "@/features/subcontent/empty.module.css";

interface EmptyProps {
  label: string;
}

export default function Empty({ label }: EmptyProps) {
  return (
    <>
      <Layout
        header={<Header title={label} />}
        body={
          <>
          <div className={style.empty}>
            <Image
              src="/no_data.svg"
              width={110}
              height={98}
              alt="No data."
              className={style.empty_image}
            />
            <span className={style.empty_message}>Loading...</span>
          </div>
          </>
        }
      />
    </>
  );
}

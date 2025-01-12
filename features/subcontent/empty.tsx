import Header from "./header";
import Image from "next/image";
import Layout from "./layout";
import style from "@/features/subcontent/empty.module.css";

interface EmptyProps {
  label?: string;
  size?: Size;
}

type Size = "m" | "l";

export default function Empty({ label, size }: EmptyProps) {
  return (
    <>
      <Layout
        header={label ? <Header title={label} /> : null}
        body={
          <>
            <div
              className={style.empty + (size === "l" ? " " + style.large : "")}
            >
              <div className={style.inner}>
                <div className={style.dot} />
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

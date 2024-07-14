import style from "@/features/front/profileItem.module.css";

interface ProfileSingleItemProps {
  label: string;
  data: string;
}

interface ProfileMultipleItemsProps {
  label: string;
  data: string[];
}

export function ProfileSingleItem({ label, data }: ProfileSingleItemProps) {
  return (
    <>
      <span className={style.item}>
        <span className={style.itemLabel}>{label}</span>
        <span className={style.itemText}>{data}</span>
      </span>
    </>
  );
}

export function ProfileMultipleItems({ label, data }: ProfileMultipleItemsProps) {
  return (
    <>
      <span className={style.item}>
        <span className={style.itemLabel}>{label}</span>
        <span className={style.itemValues}>
          {data.map((o, i) => (
            <span className={style.itemValue} key={i}>
              {o}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}

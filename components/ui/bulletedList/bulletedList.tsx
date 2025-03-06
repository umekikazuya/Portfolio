import React from "react";
import style from "./bulleted_list.module.css";

type BulletedListProps = {
  children: React.ReactNode;
};

const BulletedList: React.FC<BulletedListProps> = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};

export default BulletedList;

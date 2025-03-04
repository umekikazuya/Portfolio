import React from "react";
import style from "./more_link.module.css";
import Link from "next/link";

type MoreLinkProps = {
  href: string;
  children: React.ReactNode;
};

const MoreLink: React.FC<MoreLinkProps> = ({ href }) => {
  return (
    <Link href={href} className={style.more_link}>
      <span>View all</span>
      <span></span>
    </Link>
  );
};

export default MoreLink;

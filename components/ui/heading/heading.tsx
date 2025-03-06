import React from "react";
import style from "./heading.module.css";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ level = 2, children }) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const className = style[`h${level}`] || "";
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;

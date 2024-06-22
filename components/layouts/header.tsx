"use client";

import Link from "next/link";
import style from "./header.module.css";

type NavLink = {
  title: string;
  href: string;
};

const NavLinks: NavLink[] = [
  {
    title: "Works（準備中）",
    href: "#",
  },
  {
    title: "Profile（準備中）",
    href: "#",
  },
  {
    title: "TechBlog（準備中）",
    href: "#",
  },
];

export default function Header() {
  return (
    <>
      <nav className={style.nav}>
        {NavLinks.map((o, index) => (
          <Link
            href={o.href}
            key={index}
            aria-disabled
            className={style.nav_link}
          >
            {o.title}
          </Link>
        ))}
      </nav>
    </>
  );
}

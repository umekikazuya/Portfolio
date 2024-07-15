import Link from "next/link";
import style from "./header.module.css";

interface NavLink {
  title: string;
  href: string;
}

const NavLinks: NavLink[] = [
  {
    title: "Contact",
    href: process.env.NEXT_PUBLIC_CONTACT_URL ?? "",
  },
  {
    title: "Works（準備中）",
    href: "#",
  },
  {
    title: "Blog（準備中）",
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

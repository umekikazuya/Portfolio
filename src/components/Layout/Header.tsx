import styled from "styled-components";

type NavLink = {
  title: string;
  href: string;
};

const NavLinks: NavLink[] = [
  {
    title: 'Works',
    href: '#',
  },
  {
    title: 'Profile',
    href: '#',
  },
  {
    title: 'TechBlog',
    href: '#',
  }
];

export default function Header() {
  return (
    <>
    <Nav>
      {NavLinks.map((o, index) => (
        <Link href={o.href} key={index}>{o.title}</Link>
      ))}
    </Nav>
    </>
  );
}



const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  column-gap: 24px;
`;

const Link = styled.a`
  color: #868C9B;
  font-size: 16px;
  font-weight: 600;
  text-shadow: 0 1px 2px #9CA1AD;
`;

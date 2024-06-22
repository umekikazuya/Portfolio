import styled from 'styled-components';

type NavLink = {
  title: string;
  href: string;
};

const NavLinks: NavLink[] = [
  {
    title: 'Works（準備中）',
    href: '#',
  },
  {
    title: 'Profile（準備中）',
    href: '#',
  },
  {
    title: 'TechBlog（準備中）',
    href: '#',
  },
];

export default function Header() {
  return (
    <>
      <Nav>
        {NavLinks.map((o, index) => (
          <Link
            href={o.href}
            key={index}>
            {o.title}
          </Link>
        ))}
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  margin-left: auto;
  display: none;
  column-gap: 24px;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const Link = styled.a`
  font-size: 16px;
  /* font-weight: 600; */
  color: #868c9b;
  text-shadow: 0 4px 4px #b8b8b8;
`;

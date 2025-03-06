"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 80px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.8);
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  position: relative;
  padding: 8px 0;
  color: ${(props) => (props.$isActive ? "#000" : "#666")};
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #000;
    transform: scaleX(${(props) => (props.$isActive ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #fafafa;
  color: #666;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    color: #000;
  }
`;

export function Header() {
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <HeaderInner>
        <Nav>
          <NavLink href="/" $isActive={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" $isActive={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/article" $isActive={pathname === "/articles"}>
            Article
          </NavLink>
          <NavLink href="/about-site" $isActive={pathname === "/about-site"}>
            Inside this site
          </NavLink>
        </Nav>
        {/* <ThemeToggle
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </ThemeToggle> */}
      </HeaderInner>
    </HeaderContainer>
  );
}

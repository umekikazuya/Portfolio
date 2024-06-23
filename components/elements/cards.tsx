"use client";

import styled from "styled-components";
import Link from "next/link";
import { ReactNode } from "react";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

interface CardsProps {
  children: ReactNode;
  url: string;
}

export default function Cards({ children, url }: CardsProps) {
  return (
    <FlexContainer>
      <Card>
        <StyledLink href={url}>{children}</StyledLink>
      </Card>
    </FlexContainer>
  );
}

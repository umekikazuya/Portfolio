"use client";

import styled, { css } from "styled-components";
import { useRouter } from "next/navigation";

type ButtonProps = {
  label: string;
  url: string;
  size: "s" | "m" | "l";
};

export function NavigateButton({ label, url, size }: ButtonProps) {
  const router = useRouter();

  return (
    <StyledNavigateButton type="button" onClick={() => router.push(url)}>
      <StyledNavigateButtonInner size={size}>{label}</StyledNavigateButtonInner>
      <StyledNavigateButtonCover></StyledNavigateButtonCover>
    </StyledNavigateButton>
  );
}

const StyledNavigateButton = styled.button`
  position: relative;
  padding: 2px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  overflow: hidden;
  cursor: pointer;
`;

const StyledNavigateButtonInner = styled.span<{ size: string }>`
  position: relative;
  z-index: 2;
  background-color: #fff;
  border-radius: 4px;
  padding: 6px 12px;
  display: block;
  font-weight: 600;
  line-height: 1;
  color: #868c9b;
  font-size: 12px;
  ${({ size }) =>
    size === "m" &&
    css`
      padding: 12px 32px;
      font-size: 14px;
    `}
`;

const StyledNavigateButtonCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to right, #58a6ff, #c258ff);
  filter: blur(12px);
  z-index: 1;
  
  ${StyledNavigateButton}:hover & {
    background-image: linear-gradient(to right, #9198e5, #e66465);
  }
`;

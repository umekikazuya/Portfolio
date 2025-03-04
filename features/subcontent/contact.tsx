"use client";

import { useTranslations } from "next-intl";
import Button from "@/components/ui/button/button";
import styled from "styled-components";

const contactURL = process.env.NEXT_PUBLIC_CONTACT_URL ?? "";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <>
      <Title>{t("title")}</Title>
      <Description>{t("body")}</Description>
      <ButtonWrapper>
        <Button onClick={() => window.location.assign(contactURL)}>
          {t("button")}
        </Button>
      </ButtonWrapper>
    </>
  );
}

const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  color: #1a1a1a;
  font-size: 18px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 16px;
  color: #737373;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

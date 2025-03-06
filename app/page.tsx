"use client";

import styled from "styled-components";
import { HeroSection } from "@/components/features/home/hero";
import { Articles } from "@/components/features/home/article";
import { Profile } from "@/components/features/home/profile";

export default function Page() {
  return (
    <>
      <HeroSection />
      <MainContent>
        <ContentSection>
          <Profile />
          {/* <SelectedWorks /> */}
          <Articles />
        </ContentSection>
      </MainContent>
    </>
  );
}

const MainContent = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;
`;

const ContentSection = styled.div`
  margin-top: -120px;
  position: relative;
  z-index: 2;
  background: white;
  border-radius: 32px 32px 0 0;
  padding: 64px 32px;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    margin-top: -60px;
    padding: 40px 20px;
  }
`;

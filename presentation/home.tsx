"use client";

import { HeroSection } from "@/components/features/home/hero";
import styled from "styled-components";

/**
 * Renders the home page layout with a hero section, profile, and provided article content.
 *
 * The layout begins with a hero section, followed by a styled main content area that encapsulates
 * a profile component and the custom article content passed to the component.
 *
 * @param profileComponent - The profile component to render within the content section.
 * @param articleComponent - The custom content to render within the content section.
 * @returns A React element representing the home page layout.
 */
export function HomeLayout({
  profileComponent,
  articleComponent,
}: {
  profileComponent: React.ReactNode;
  articleComponent: React.ReactNode;
}) {
  return (
    <>
      <HeroSection />
      <MainContent>
        <ContentSection>
          {profileComponent}
          {/* <SelectedWorks /> */}
          {articleComponent}
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

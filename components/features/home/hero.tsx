"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding: 120px 24px;
  background: #fafafa;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 80px 24px;
  }
`;

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Greeting = styled(motion.span)`
  display: block;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #666;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const HeroText = styled(motion.p)`
  font-size: 1.25rem;
  color: #666;
  max-width: 600px;
  line-height: 1.6;
`;

const BackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.4;
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);

  &.circle1 {
    width: 400px;
    height: 400px;
    right: -100px;
    top: -100px;
  }

  &.circle2 {
    width: 300px;
    height: 300px;
    right: 200px;
    bottom: -50px;
  }

  &.circle3 {
    width: 200px;
    height: 200px;
    left: 10%;
    top: 20%;
  }
`;

export function HeroSection() {
  return (
    <HeroContainer>
      <BackgroundElements>
        <Circle
          className="circle1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <Circle
          className="circle2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <Circle
          className="circle3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </BackgroundElements>

      <HeroInner>
        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {"Hello, I'm a Web Creator based in Fukuoka"}
          </Greeting>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome aboard.
          </HeroTitle>
          <HeroText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Thank you for coming to take a look. My name is umekikazuya.
          </HeroText>
        </HeroContent>
      </HeroInner>
    </HeroContainer>
  );
}

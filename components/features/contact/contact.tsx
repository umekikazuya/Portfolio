"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const contactURL = process.env.NEXT_PUBLIC_CONTACT_URL ?? "";

const ContactWrapper = styled.section`
  padding: 120px 0;
  border-top: 1px solid #eee;
  background: #fafafa;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ContactDescription = styled.p`
  color: #666;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const ContactButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
    transform: translateY(-2px);
  }
`;

export function Contact() {
  return (
    <ContactWrapper>
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactTitle>Get In Touch</ContactTitle>
          <ContactDescription>
            Please contact me if you are interested in talking about development and production, or if you just want to talk!
          </ContactDescription>
          <ContactButton
            href={contactURL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </ContactButton>
        </motion.div>
      </ContactContainer>
    </ContactWrapper>
  );
}

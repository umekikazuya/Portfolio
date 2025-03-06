"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { MapPin, Building2, Github, Globe, Link2, Twitter } from "lucide-react";
import { fetchData } from "@/utils/api";
import { useEffect, useState } from "react";
import { User } from "@/model/user.model";
import { JsonApi } from "@/model/jsonApi.model";
import { SiDrupal, SiQiita, SiZenn } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const ProfileSection = styled.section`
  margin-bottom: 120px;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 64px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ProfileInfo = styled.div`
  max-width: 600px;
`;

const Name = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Username = styled.p`
  color: #666;
  margin-bottom: 32px;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #333;

  svg {
    color: #666;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  background: #fafafa;
  color: #333;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ProfileImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 24px;
  overflow: hidden;
  background: #f5f5f5;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export function Profile() {
  const [profile, setProfile] = useState<null | JsonApi<User>>(null);

  useEffect(() => {
    fetchData<JsonApi<User>>("/api/profile").then((data) => {
      setProfile(data);
    });
  }, []);

  if (!profile) return <></>;

  return (
    <ProfileSection>
      <ProfileGrid>
        <ProfileInfo>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Name>{profile.data.display_name}</Name>
            <Username>@{profile.data.display_short_name}</Username>

            <InfoList>
              <InfoItem>
                <Building2 size={20} />
                <span>{profile.data.job}</span>
              </InfoItem>
              <InfoItem>
                <MapPin size={20} />
                <span>
                  From: {profile.data.from} / Address: {profile.data.address}
                </span>
              </InfoItem>
            </InfoList>

            <SocialLinks>
              {profile.data.github && (
                <SocialLink
                  href={`https://github.com/${profile.data.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={16} color={"#333"} />
                  GitHub
                </SocialLink>
              )}
              {profile.data.qiita && (
                <SocialLink
                  href={`https://qiita.com/${profile.data.qiita}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiQiita size={16} color={"#333"} />
                  Qiita
                </SocialLink>
              )}
              {profile.data.zenn && (
                <SocialLink
                  href={`https://zenn.dev/${profile.data.zenn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiZenn size={16} color={"#333"} />
                  Zenn
                </SocialLink>
              )}
              <SocialLink
                href="https://www.drupal.org/u/umekikazuya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiDrupal size={16} color={"#333"} />
                Drupal
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </ProfileInfo>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProfileImage />
        </motion.div>
      </ProfileGrid>
    </ProfileSection>
  );
}

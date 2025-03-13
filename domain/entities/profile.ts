import {
  ProfileAddress,
  ProfileFrom,
  ProfileGitHub,
  ProfileId,
  ProfileIntroduction,
  ProfileJob,
  ProfileLikes,
  ProfileName,
  ProfileQiita,
  ProfileShortName,
  ProfileSkill,
  ProfileZenn,
} from "../valueObjects/profile";

export interface Profile {
  id: ProfileId;
  display_name: ProfileName;
  display_short_name: ProfileShortName;
  address: ProfileAddress;
  from: ProfileFrom;
  github: ProfileGitHub;
  introduction: ProfileIntroduction;
  job: ProfileJob;
  likes: ProfileLikes;
  qiita: ProfileQiita;
  skill: ProfileSkill;
  summary_introduction: ProfileIntroduction;
  zenn: ProfileZenn;
}

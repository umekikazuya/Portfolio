import { Profile } from "@/domain/entities/profile";
import {
  createProfileAddress,
  createProfileFrom,
  createProfileGitHub,
  createProfileId,
  createProfileIntroduction,
  createProfileJob,
  createProfileLikes,
  createProfileName,
  createProfileQiita,
  createProfileShortName,
  createProfileSkill,
  createProfileZenn,
} from "@/domain/valueObjects/profile";
import { Result } from "@/types/result";

export const parseProfile = (raw: unknown): Result<Profile, Error> => {
  if (typeof raw !== "object" || raw === null) {
    return {
      ok: false,
      error: new Error(
        `データが無効です。受け取った型: ${raw === null ? "null" : typeof raw}`
      ),
    };
  }

  const {
    address,
    display_name,
    display_short_name,
    from,
    github,
    id,
    introduction,
    job,
    likes,
    qiita,
    skills,
    summary_introduction,
    zenn,
  } = raw as Record<string, unknown>;

  // ProfileIdを生成
  const profileId = createProfileId(id);
  if (!profileId.ok) return profileId;

  // ProfileAddressを生成
  const profileAddress = createProfileAddress(address);
  if (!profileAddress.ok) return profileAddress;

  // ProfileFromを生成
  const profileFrom = createProfileFrom(from);
  if (!profileFrom.ok) return profileFrom;

  // ProfileGitHubを生成
  const profileGitHub = createProfileGitHub(github);
  if (!profileGitHub.ok) return profileGitHub;

  // ProfileIntroductionを生成
  const profileIntroduction = createProfileIntroduction(introduction);
  if (!profileIntroduction.ok) return profileIntroduction;

  // ProfileJobを生成
  const profileJob = createProfileJob(job);
  if (!profileJob.ok) return profileJob;

  // ProfileLikesを生成
  const profileLikes = createProfileLikes(likes);
  if (!profileLikes.ok) return profileLikes;

  // ProfileNameを生成
  const profileName = createProfileName(display_name);
  if (!profileName.ok) return profileName;

  // ProfileQiitaを生成
  const profileQiita = createProfileQiita(qiita);
  if (!profileQiita.ok) return profileQiita;

  // ProfileShortNameを生成
  const profileShortName = createProfileShortName(display_short_name);
  if (!profileShortName.ok) return profileShortName;

  // ProfileSkillを生成
  const profileSkill = createProfileSkill(skills);
  if (!profileSkill.ok) return profileSkill;

  // ProfileZennを生成
  const profileZenn = createProfileZenn(zenn);
  if (!profileZenn.ok) return profileZenn;

  // エンティティを返却
  const profile: Profile = {
    id: profileId.value,
    address: profileAddress.value,
    from: profileFrom.value,
    github: profileGitHub.value,
    introduction: profileIntroduction.value,
    job: profileJob.value,
    likes: profileLikes.value,
    display_name: profileName.value,
    display_short_name: profileShortName.value,
    qiita: profileQiita.value,
    summary_introduction: profileIntroduction.value,
    skill: profileSkill.value,
    zenn: profileZenn.value,
  };

  return { ok: true, value: profile };
};

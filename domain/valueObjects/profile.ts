import { Result } from "@/types/result";

export type Branded<T, B> = T & { _brand: B };

export type ProfileId = Branded<number, "ProfileId">;
export type ProfileName = Branded<string | null, "ProfileName">;
export type ProfileShortName = Branded<string | null, "ProfileShortName">;
export type ProfileAddress = Branded<string | null, "ProfileAddress">;
export type ProfileFrom = Branded<string | null, "ProfileFrom">;
export type ProfileIntroduction = Branded<string | null, "ProfileIntroduction">;
export type ProfileJob = Branded<string | null, "ProfileJob">;
export type ProfileSkill = Branded<string[] | null, "ProfileSkill">;
export type ProfileLikes = Branded<string[] | null, "ProfileLikes">;
export type ProfileGitHub = Branded<string | null, "ProfileGitHub">;
export type ProfileQiita = Branded<string | null, "ProfileQiita">;
export type ProfileZenn = Branded<string | null, "ProfileZenn">;

export function createProfileId(id: unknown): Result<ProfileId, Error> {
  if (typeof id === "number" && Number.isInteger(id) && 0 < id) {
    return { ok: true, value: id as ProfileId };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileName(name: unknown): Result<ProfileName, Error> {
  if (typeof name === "string" || name === null) {
    return { ok: true, value: name as ProfileName };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileShortName(
  shortName: unknown
): Result<ProfileShortName, Error> {
  if (typeof shortName === "string" || shortName === null) {
    return { ok: true, value: shortName as ProfileShortName };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileAddress(
  address: unknown
): Result<ProfileAddress, Error> {
  if (typeof address === "string" || address === null) {
    return { ok: true, value: address as ProfileAddress };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileFrom(from: unknown): Result<ProfileFrom, Error> {
  if (typeof from === "string" || from === null) {
    return { ok: true, value: from as ProfileFrom };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileIntroduction(
  intro: unknown
): Result<ProfileIntroduction, Error> {
  if (typeof intro === "string" || intro === null) {
    return { ok: true, value: intro as ProfileIntroduction };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileJob(job: unknown): Result<ProfileJob, Error> {
  if (typeof job === "string" || job === null) {
    return { ok: true, value: job as ProfileJob };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileSkill(
  skill: unknown
): Result<ProfileSkill, Error> {
  if (Array.isArray(skill) || skill === null) {
    return { ok: true, value: skill as ProfileSkill };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileLikes(
  likes: unknown
): Result<ProfileLikes, Error> {
  if (Array.isArray(likes) || likes === null) {
    return { ok: true, value: likes as ProfileLikes };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileGitHub(
  github: unknown
): Result<ProfileGitHub, Error> {
  if (typeof github === "string" || github === null) {
    return { ok: true, value: github as ProfileGitHub };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileQiita(
  qiita: unknown
): Result<ProfileQiita, Error> {
  if (typeof qiita === "string" || qiita === null) {
    return { ok: true, value: qiita as ProfileQiita };
  }
  return { ok: false, error: new Error("無効") };
}

export function createProfileZenn(zenn: unknown): Result<ProfileZenn, Error> {
  if (typeof zenn === "string" || zenn === null) {
    return { ok: true, value: zenn as ProfileZenn };
  }
  return { ok: false, error: new Error("無効") };
}

import { Result } from "@/types/result";
import { Profile } from "../entities/profile";

export interface ProfileRepository {
  fetch(): Promise<Result<Profile, Error>>;
}

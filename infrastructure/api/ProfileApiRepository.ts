import { Profile } from "@/domain/entities/profile";
import { ProfileRepository } from "@/domain/repositories/ProfileRepository";
import { parseProfile } from "@/lib/services/parseProfile";
import { Result } from "@/types/result";

export class ProfileApiRepository implements ProfileRepository {
  async fetch(): Promise<Result<Profile, Error>> {
    try {
      const apiUrl = process.env.NEXT_BACKEND_API;
      if (!apiUrl) {
        return { ok: false, error: new Error("API URLが設定されていません。") };
      }
      const res = await fetch(`${apiUrl}/backend/profile`);
      if (!res.ok) {
        return { ok: false, error: new Error("APIエラーが発生しました。") };
      }
      const { data }: { data: unknown } = await res.json();

      const profile = parseProfile(data);
      if (!profile.ok) {
        return { ok: false, error: new Error("APIレスポンスが不正です。") };
      }
      return { ok: true, value: profile.value };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      return {
        ok: false,
        error: new Error(`通信エラーが発生しました。詳細: ${errorMessage}`),
      };
    }
  }
}

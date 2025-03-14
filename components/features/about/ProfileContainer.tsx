import { GetProfileInteractor } from "@/domain/interactors/GetProfileInteractor";
import { ProfileApiRepository } from "@/infrastructure/api/ProfileApiRepository";
import { ProfileSection } from "./ProfileSection";

/**
 * ユーザープロフィールを取得し、ProfileSection コンポーネントを返す非同期関数。
 *
 * ProfileApiRepository と GetProfileInteractor を使用してユーザープロフィールを取得します。
 * 取得に成功した場合は、取得したプロフィールデータを渡して ProfileSection コンポーネントをレンダリングし、
 * 取得に失敗した場合は空の React フラグメントを返します。
 *
 * @returns プロフィール取得に成功した場合は ProfileSection コンポーネント、失敗した場合は空の React フラグメント。
 */
export async function ProfileContainer() {
  const repository = new ProfileApiRepository();
  const interactor = new GetProfileInteractor(repository);
  try {
    const profile = await interactor.handle();
    return <ProfileSection profile={profile} />;
  } catch (error) {
    return <></>;
  }
}

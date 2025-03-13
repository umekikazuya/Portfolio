import { GetProfileInteractor } from "@/domain/interactors/GetProfileInteractor";
import { ProfileApiRepository } from "@/infrastructure/api/ProfileApiRepository";
import { ProfileSection } from "./ProfileSection";

/**
 * ユーザーのプロフィールを取得し、その情報を表示するコンポーネントを返します。
 *
 * この非同期関数は、ProfileApiRepository を通して API からプロフィールデータを取得するための
 * GetProfileInteractor を初期化し、取得に成功した場合は ProfileSection コンポーネントへデータを渡して返却します。
 * 取得中にエラーが発生した場合は、空の JSX フラグメントを返すことで安全にフォールバックします。
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

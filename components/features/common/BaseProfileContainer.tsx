import { Profile } from "@/domain/entities/profile";
import { GetProfileInteractor } from "@/domain/interactors/GetProfileInteractor";
import { ProfileApiRepository } from "@/infrastructure/api/ProfileApiRepository";
import { ReactNode } from "react";

type BaseProfileContainerProps = {
  renderProfile: (profile: Profile) => ReactNode;
  renderEmptyState?: () => ReactNode;
};

export async function BaseProfileContainer({
  renderProfile,
  renderEmptyState = () => <></>,
}: BaseProfileContainerProps) {
  const repository = new ProfileApiRepository();
  const interactor = new GetProfileInteractor(repository);

  try {
    const profile = await interactor.handle();
    return renderProfile(profile);
  } catch (error) {
    console.error("プロフィールの取得中にエラーが発生しました:", error);
    return renderEmptyState();
  }
}

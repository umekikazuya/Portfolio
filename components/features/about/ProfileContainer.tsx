import { GetProfileInteractor } from "@/domain/interactors/GetProfileInteractor";
import { ProfileApiRepository } from "@/infrastructure/api/ProfileApiRepository";
import { ProfileSection } from "./ProfileSection";

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

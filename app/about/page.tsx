import { ProfileContainer } from "@/components/features/about/ProfileContainer";
import AboutLayout from "@/presentation/about";

export default async function AboutPage() {
  return <AboutLayout profileComponent={<ProfileContainer />} />;
}

import { ProfileContainer } from "@/components/features/about/ProfileContainer";
import AboutLayout from "@/presentation/about";

/**
 * 非同期でAboutページコンポーネントをレンダリングします。
 *
 * @remarks
 * この関数は、AboutLayoutコンポーネントを返し、そのprofileComponentプロパティにProfileContainerコンポーネントを渡します。
 */
export default async function AboutPage() {
  return <AboutLayout profileComponent={<ProfileContainer />} />;
}

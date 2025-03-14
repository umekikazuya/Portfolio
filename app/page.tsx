import { ArticleContainer } from "@/components/features/home/ArticleContainer";
import { ProfileContainer } from "@/components/features/home/ProfileContainer";
import { HomeLayout } from "@/presentation/home";

/**
 * ページレイアウトをレンダリングする非同期コンポーネントです。
 *
 * このコンポーネントは HomeLayout を返し、プロファイル情報と記事情報の両方を表示します。ProfileContainer は
 * profileComponent として、ArticleContainer は articleComponent として HomeLayout に渡され、ページレイアウトを構成します。
 *
 * @returns ページレイアウトを表す JSX 要素。
 */
export default async function Page() {
  return (
    <>
      <HomeLayout
        profileComponent={<ProfileContainer />}
        articleComponent={<ArticleContainer />}
      />
    </>
  );
}

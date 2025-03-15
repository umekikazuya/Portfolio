import { Feed, FeedElement } from "@/model/feed.model";
import { fetchData } from "@/utils/api";
import { NextRequest, NextResponse } from "next/server";

type ENDPOINT_TYPE = {
  url: string;
  service: { name: string; link: string };
};

/**
 * Next.jsのGETリクエストを処理し、QiitaおよびZennサービスからデータを取得、マージ後にJSONレスポンスを返します。
 *
 * リクエストのクエリパラメータから"category"を取得し、必要に応じてQiitaまたはZennのエンドポイントにフィルタリングします。
 * 各エンドポイントのデータを並行処理で取得し、取得に成功したデータをマージ、公開日付の降順にソートした結果を返します。
 * 正常な場合はステータス200のレスポンス、エラー発生時はエラーメッセージを含むステータス500のレスポンスを返します.
 *
 * @param request - クエリパラメータなどの情報を含むNext.jsのHTTPリクエストオブジェクト。
 * @returns マージされたデータまたはエラーメッセージを含むNextResponseオブジェクト。
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");

  const ENDPOINTS: ENDPOINT_TYPE[] = [
    {
      url: `${process.env.NEXT_BACKEND_API}/backend/qiita/${process.env.NEXT_PUBLIC_QITIA_ID}`,
      service: {
        name: "Qiita",
        link: `https://qiita.com/${process.env.NEXT_PUBLIC_QITIA_ID}`,
      },
    },
    {
      url: `${process.env.NEXT_BACKEND_API}/backend/zenn/${process.env.NEXT_PUBLIC_ZENN_ID}`,
      service: {
        name: "Zenn",
        link: `https://zenn.dev/${process.env.NEXT_PUBLIC_QITIA_ID}`,
      },
    },
  ].filter((endpoint) => {
    if (category === "qiita") return endpoint.service.name === "Qiita";
    if (category === "zenn") return endpoint.service.name === "Zenn";
    return true; // フィルタがない場合は全件取得
  });

  try {
    const results = await Promise.allSettled(
      ENDPOINTS.map(async ({ url, service }) => {
        const res = await fetchData<Feed>(url);
        return res?.data.map((item: FeedElement) => ({
          ...item,
          service,
        }));
      })
    );

    // 成功したデータのみ抽出し、配列をフラット化
    const mergedData = results
      .filter((result) => result.status === "fulfilled")
      .flatMap(
        (result) => (result as PromiseFulfilledResult<FeedElement[]>).value
      );

    // 日付降順でソート
    mergedData.sort(
      (a, b) =>
        new Date(b.published).getTime() - new Date(a.published).getTime()
    );

    return new NextResponse(JSON.stringify(mergedData), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch and merge Qiita/Zenn data" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}

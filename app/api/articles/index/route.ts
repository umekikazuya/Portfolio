import { Feed, FeedElement } from "@/model/feed.model";
import { fetchData } from "@/utils/api";
import { NextRequest, NextResponse } from "next/server";

type ENDPOINT_TYPE = {
  url: string;
  service: { name: string; link: string };
};

/**
 * QiitaおよびZennからフィードデータを取得して統合するGETリクエストハンドラー。
 *
 * リクエストの検索パラメータに基づいて、"category"が指定されている場合は該当するサービスのエンドポイントのみを対象にデータを取得します。
 * 各エンドポイントから取得したフィードデータを統合し、発行日時に基づいて降順にソートした結果をJSON形式で返します。
 * データの取得や統合に失敗した場合、エラーメッセージを含むJSONレスポンス（HTTPステータス500）を返します。
 *
 * @param request - Next.jsのリクエストオブジェクト。検索パラメータに"category"が含まれている場合、その値に応じて取得するサービス（"Qiita"または"Zenn"）が決定される。
 * @returns 統合されたフィードデータを返すJSONレスポンス（成功時はHTTPステータス200）。
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

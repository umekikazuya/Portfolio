import { NextResponse } from "next/server";


/**
 * HTTP GETリクエストを処理し、バックエンドAPIからpickup記事のデータを取得してJSON形式のレスポンスを返します。
 *
 * 環境変数 NEXT_BACKEND_API を元にエンドポイントURLを構築し、キャッシュ無効のfetchリクエストを実行します。
 * エンドポイントが未定義の場合は、HTTP 500ステータスとエラーメッセージを含むレスポンスを返します。
 */
export async function GET(request: Request) {
  const ENDPOINT = process.env.NEXT_BACKEND_API + "/backend/article?is_pickup=1";
  if (!ENDPOINT) {
    return new NextResponse(
      JSON.stringify({ error: "API endpoint is not defined" }),
      { status: 500 }
    );
  }

  const res = await fetch(ENDPOINT, {
    cache: "no-store",
  });
  return new NextResponse(
    res.body,
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

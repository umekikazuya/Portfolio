import { NextResponse } from "next/server";


/**
 * バックエンドAPIからピックアップ記事を取得し、HTTPレスポンスを返す非同期関数です。
 *
 * この関数は、環境変数 NEXT_BACKEND_API を元にエンドポイントURLを構築し、
 * そのURLへ fetch リクエストを実行します。エンドポイントが定義されていない場合は、
 * エラーメッセージを含むJSON形式のレスポンス（ステータスコード500）を返します。
 *
 * @param request - 処理対象のHTTP GETリクエストオブジェクト。
 *
 * @returns バックエンドAPIからのレスポンス、またはエラー内容を含むレスポンスを返すNextResponseオブジェクト。
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

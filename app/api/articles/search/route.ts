import { GetArticlesInteractor } from "@/domain/interactors/GetArticlesInteractor";
import { ArticleApiRepository } from "@/infrastructure/api/ArticleApiRepository";
import { NextRequest, NextResponse } from "next/server";

/**
 * HTTP GETリクエストを処理し、バックエンドAPIから記事検索のデータを取得してJSON形式のレスポンスを返します。
 */
export async function GET(request: NextRequest) {
  const repository = new ArticleApiRepository();
  const interactor = new GetArticlesInteractor(repository);

  const keyword = request.nextUrl.searchParams.get("keyword");
  const serviceId = request.nextUrl.searchParams.get("service_id");
  try {
    const parsedServiceId = serviceId ? parseInt(serviceId) : null;
    // キーワードが存在する場合、基本的なバリデーションを行う
    if (keyword && (keyword.length > 100 || /[<>]/.test(keyword))) {
      return new NextResponse(
        JSON.stringify({ error: "無効なキーワードが指定されました" }),
        {
          status: 400,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }
    const articles = await interactor.handle(keyword, parsedServiceId);
    return new NextResponse(JSON.stringify(articles), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}

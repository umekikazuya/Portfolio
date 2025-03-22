import { GetServicesInteractor } from "@/domain/interactors/GetServicesInteractor";
import { ServiceApiRepository } from "@/infrastructure/api/ServiceApiRepository";
import { NextResponse } from "next/server";

/**
 * HTTP GETリクエストを処理し、バックエンドAPIから記事検索のデータを取得してJSON形式のレスポンスを返します。
 */
export async function GET(request: Request) {
  const repository = new ServiceApiRepository();
  const interactor = new GetServicesInteractor(repository);

  try {
    const services = await interactor.handle();

    return new NextResponse(JSON.stringify(services), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("サービス取得中にエラーが発生しました:", error);
    return new NextResponse(
      JSON.stringify({ error: "サービスの取得に失敗しました" }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const ENDPOINT = process.env.NEXT_DRUPAL_API + "/backend/profile";
  if (!ENDPOINT) {
    return new NextResponse(
      JSON.stringify({ error: "API endpoint is not defined" }),
      { status: 500 }
    );
  }

  const res = await fetch(ENDPOINT);
  return new NextResponse(res.body, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

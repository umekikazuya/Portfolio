import { ArticleApiRepository } from "@/infrastructure/api/ArticleApiRepository";

jest.mock("@/lib/services/parseArticle", () => ({
  parseArticle: jest.fn().mockImplementation((article) => ({
    ok: true,
    value: {
      id: article.id,
      title: article.title,
      link: article.link,
      publishedAt: article.publishedAt
    }
  }))
}));

beforeEach(() => {
  fetchMock.resetMocks(); // ✅ fetch のモックをリセット
});

test("fetchAll should return articles", async () => {
  // ✅ fetch のモックを適用（API 通信を発生させない）
  fetchMock.mockResponseOnce(
    JSON.stringify({
      data: [
        {
          id: "1",
          title: "Test Article",
          link: "https://test.com",
          publishedAt: new Date().toISOString()
        }
      ]
    })
  );

  const repo = new ArticleApiRepository(); // ✅ テスト対象はモックしない
  const result = await repo.fetchAll();
  

  // ✅ fetchMock の呼び出し回数をチェック
  expect(fetchMock).toHaveBeenCalledTimes(1);

  // ✅ 期待されるレスポンスが返ることを確認
  expect(result.ok).toBe(true);
  if (result.ok) {
    expect(Array.isArray(result.value)).toBe(true);
    expect(result.value.length).toBeGreaterThan(0);
  }
});

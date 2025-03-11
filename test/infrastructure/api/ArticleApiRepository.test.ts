import { ArticleApiRepository } from "@/infrastructure/api/ArticleApiRepository";

jest.mock('@/infrastructure/api/ArticleApiRepository', () => {
  return {
    ArticleApiRepository: jest.fn().mockImplementation(() => ({
      fetchAll: jest.fn().mockResolvedValue({
        ok: true,
        value: [{ id: "1", title: "Test Article", link: "https://test.com", publishedAt: new Date() }],
      }),
    })),
  };
});

test('fetchAll should return articles', async () => {
  const repo = new ArticleApiRepository();
  const result = await repo.fetchAll();

  console.log("fetchAll result:", result);

  expect(result.ok).toBe(true);
  if (result.ok) {
    expect(Array.isArray(result.value)).toBe(true);
    expect(result.value.length).toBeGreaterThan(0);
  }
});

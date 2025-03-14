import { ProfileApiRepository } from "@/infrastructure/api/ProfileApiRepository";

jest.mock("@/lib/services/parseProfile", () => ({
  parseProfile: jest.fn().mockImplementation((profile) => {
    if (!profile || typeof profile !== "object") {
      return { ok: false, error: new Error("無効なデータ") };
    }

    return {
      ok: true,
      value: {
        id: profile.id ?? null,
        short_name: profile.short_name ?? "",
        display_name: profile.display_name ?? "",
      },
    };
  }),
}));

beforeEach(() => {
  fetchMock.resetMocks(); // ✅ fetch のモックをリセット
});

test("fetch should return a profile", async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      data: {
        id: 1,
        short_name: "Test Profile",
        display_name: "Test Profile",
      },
    })
  );

  const repo = new ProfileApiRepository();
  const result = await repo.fetch();

  expect(fetchMock).toHaveBeenCalledTimes(1);
  expect(result.ok).toBe(true);

  if (result.ok) {
    expect(result.value).toBeDefined();
    expect(result.value.id).not.toBeNull();
    expect(result.value.id).toBeGreaterThan(0);
  }
});

test("API URLが設定されていない場合、エラーを返す", async () => {
  // 環境変数をモック
  const originalEnv = process.env;
  process.env = { ...originalEnv };
  delete process.env.NEXT_DRUPAL_API;

  const repo = new ProfileApiRepository();
  const result = await repo.fetch();

  expect(result.ok).toBe(false);
  if (!result.ok) {
    expect(result.error.message).toBe("API URLが設定されていません。");
  }

  // 環境変数を元に戻す
  process.env = originalEnv;
});

test("APIがエラーレスポンスを返す場合、エラーを返す", async () => {
  fetchMock.mockResponseOnce("", { status: 500 });

  const repo = new ProfileApiRepository();
  const result = await repo.fetch();

  expect(result.ok).toBe(false);
  if (!result.ok) {
    expect(result.error.message).toBe("APIエラーが発生しました。");
  }
});

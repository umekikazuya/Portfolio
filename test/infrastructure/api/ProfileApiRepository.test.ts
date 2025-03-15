import { ProfileApiRepository } from "@/infrastructure/api/ProfileApiRepository";

jest.mock("@/lib/services/parseProfile", () => ({
  parseProfile: jest.fn().mockImplementation((profile) => {
    if (!profile || typeof profile !== "object") {
      return { ok: false, error: new Error("無効なデータ") };
    }

    // 必須フィールドの検証
    if (!profile.id || typeof profile.id !== "number") {
      return {
        ok: false,
        error: new Error("IDは必須で数値である必要があります"),
      };
    }

    return {
      ok: true,
      value: {
        id: profile.id ?? null,
        display_short_name: profile.display_short_name ?? "",
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
        display_short_name: "Test Profile",
        display_name: "Test Profile",
      },
    })
  );

  const repo = new ProfileApiRepository();
  const result = await repo.fetch();

  expect(fetchMock).toHaveBeenCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith(
    expect.stringContaining(process.env.NEXT_BACKEND_API || "")
  );
  expect(result.ok).toBe(true);

  if (result.ok) {
    expect(result.value).toBeDefined();
    expect(result.value.id).not.toBeNull();
    expect(result.value.id).toBeGreaterThan(0);
    expect(result.value.display_short_name).toBe("Test Profile");
    expect(result.value.display_name).toBe("Test Profile");
  }
});

test("API URLが設定されていない場合、エラーを返す", async () => {
  // 環境変数をモック
  const originalEnv = process.env;
  process.env = { ...originalEnv };
  process.env.NEXT_BACKEND_API = undefined;
  const repo = new ProfileApiRepository();
  const result = await repo.fetch();
  expect(result.ok).toBe(false);
  if (!result.ok) {
    expect(result.error.message).toBe("API URLが設定されていません。");
  }
  // fetchが呼び出されていないことを確認
  expect(fetchMock).not.toHaveBeenCalled();
  // 環境変数を元に戻す
  process.env = originalEnv;
});

test("APIがエラーレスポンスを返す場合、エラーを返す", async () => {
  fetchMock.mockResponseOnce("", { status: 500 });

  const repo = new ProfileApiRepository();
  const result = await repo.fetch();

  // APIが正しく呼び出されたことを確認
  expect(fetchMock).toHaveBeenCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith(
    expect.stringContaining(process.env.NEXT_BACKEND_API || "")
  );

  expect(result.ok).toBe(false);
  if (!result.ok) {
    expect(result.error.message).toBe("APIエラーが発生しました。");
  }
});

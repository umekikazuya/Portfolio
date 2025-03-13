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

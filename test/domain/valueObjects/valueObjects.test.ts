import {
  createArticleId,
  createArticleTitle,
  createArticlePublished,
} from "@/domain/valueObjects/article";
import { Result } from "@/types/result";

describe("Value Object Tests", () => {
  test("createArticleId should return valid Result when given a string ID", () => {
    const result = createArticleId("123");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(123);
    }
  });

  test("createArticleId should return error for empty ID", () => {
    const result = createArticleId("");
    expect(result.ok).toBe(false);
  });

  test("createArticleTitle should return valid Result for valid title", () => {
    const result = createArticleTitle("Next.jsの基本");
    expect(result.ok).toBe(true);
  });

  test("createArticlePublished should return valid Result for ISO date", () => {
    const result = createArticlePublished("2024-12-03T00:00:00.000Z");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBeInstanceOf(Date);
    }
  });

  test("createArticlePublished should return error for invalid date", () => {
    const result = createArticlePublished("invalid-date");
    expect(result.ok).toBe(false);
  });
});

describe("Result Type Tests", () => {
  test("Result.ok should contain value", () => {
    const success: Result<number, Error> = { ok: true, value: 42 };
    expect(success.ok).toBe(true);
    expect(success.value).toBe(42);
  });

  test("Result.error should contain error message", () => {
    const failure: Result<number, Error> = {
      ok: false,
      error: new Error("Something went wrong"),
    };
    expect(failure.ok).toBe(false);
    expect(failure.error.message).toBe("Something went wrong");
  });
});

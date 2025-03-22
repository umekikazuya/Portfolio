import { Branded } from "@/types/branded";
import { Result } from "@/types/result";

export type FeaturedArticleId = Branded<number, "FeaturedArticleId">;

/**
 * Validates and constructs a branded FeaturedArticleId from the provided input.
 *
 * The function checks whether the input is a number or a string representing a number,
 * and returns a branded FeaturedArticleId if the parsed value is a positive number. Otherwise,
 * it returns an error with the message "無効なID".
 *
 * @param id - The input to validate as an FeaturedArticleId; can be a number or a numeric string.
 * @returns A Result containing a branded FeaturedArticleId if the input is valid, or an error if not.
 */
export function createFeaturedArticleId(id: unknown): Result<FeaturedArticleId, Error> {
  if (typeof id === "number") {
    return id > 0
      ? { ok: true, value: id as FeaturedArticleId }
      : { ok: false, error: new Error("無効なID") };
  }
  if (typeof id === "string" && /^\d+$/.test(id)) {
    const parsed = parseInt(id, 10);
    return parsed > 0
      ? { ok: true, value: parsed as FeaturedArticleId }
      : { ok: false, error: new Error("無効なID") };
  }
  return { ok: false, error: new Error("無効なID") };
}

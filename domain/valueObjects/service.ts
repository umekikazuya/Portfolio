import { Branded } from "@/types/branded";
import { Result } from "@/types/result";

export type ServiceId = Branded<number, "ServiceId">;
export type ServiceName = Branded<string | null, "ServiceName">;

/**
 * 入力値が正の整数である場合に、ServiceId を生成する。
 *
 * 入力が数値かつ整数で、0 より大きい場合、ServiceId 型としてラップされた成功結果を返します。
 * それ以外の場合は、エラーメッセージ「無効」を含む失敗結果を返します。
 *
 * @param id - 正の整数である必要がある入力値。
 *
 * @returns 検証に成功した場合は ServiceId 型の値を、失敗した場合はエラーを含む結果を返す。
 */
export function createServiceId(id: unknown): Result<ServiceId, Error> {
  if (typeof id === "number" && Number.isInteger(id) && 0 < id) {
    return { ok: true, value: id as ServiceId };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * 入力値を検証して有効な ServiceName を作成する。
 *
 * 入力が文字列または null の場合、その値を ServiceName 型としてキャストし、成功結果を返します。
 * それ以外の場合は、エラーメッセージ「無効」を持つ失敗結果を返します。
 *
 * @param name - 検証対象の値。文字列または null である必要があります。
 * @returns 成功時は ServiceName 型にキャストされた値を含む結果、失敗時はエラー（「無効」）を含む結果を返します。
 */
export function createServiceName(name: unknown): Result<ServiceName, Error> {
  if (typeof name === "string" || name === null) {
    return { ok: true, value: name as ServiceName };
  }
  return { ok: false, error: new Error("無効") };
}

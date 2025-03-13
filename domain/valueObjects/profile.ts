import { Result } from "@/types/result";

export type Branded<T, B> = T & { _brand: B };

export type ProfileId = Branded<number, "ProfileId">;
export type ProfileName = Branded<string | null, "ProfileName">;
export type ProfileShortName = Branded<string | null, "ProfileShortName">;
export type ProfileAddress = Branded<string | null, "ProfileAddress">;
export type ProfileFrom = Branded<string | null, "ProfileFrom">;
export type ProfileIntroduction = Branded<string | null, "ProfileIntroduction">;
export type ProfileJob = Branded<string | null, "ProfileJob">;
export type ProfileSkill = Branded<string[] | null, "ProfileSkill">;
export type ProfileLikes = Branded<string[] | null, "ProfileLikes">;
export type ProfileGitHub = Branded<string | null, "ProfileGitHub">;
export type ProfileQiita = Branded<string | null, "ProfileQiita">;
export type ProfileZenn = Branded<string | null, "ProfileZenn">;

/**
 * 入力値が正の整数である場合に、ProfileId を生成する。
 *
 * 入力が数値かつ整数で、0 より大きい場合、ProfileId 型としてラップされた成功結果を返します。
 * それ以外の場合は、エラーメッセージ「無効」を含む失敗結果を返します。
 *
 * @param id - 正の整数である必要がある入力値。
 *
 * @returns 検証に成功した場合は ProfileId 型の値を、失敗した場合はエラーを含む結果を返す。
 */
export function createProfileId(id: unknown): Result<ProfileId, Error> {
  if (typeof id === "number" && Number.isInteger(id) && 0 < id) {
    return { ok: true, value: id as ProfileId };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * 入力値を検証して有効な ProfileName を作成する。
 *
 * 入力が文字列または null の場合、その値を ProfileName 型としてキャストし、成功結果を返します。
 * それ以外の場合は、エラーメッセージ「無効」を持つ失敗結果を返します。
 *
 * @param name - 検証対象の値。文字列または null である必要があります。
 * @returns 成功時は ProfileName 型にキャストされた値を含む結果、失敗時はエラー（「無効」）を含む結果を返します。
 */
export function createProfileName(name: unknown): Result<ProfileName, Error> {
  if (typeof name === "string" || name === null) {
    return { ok: true, value: name as ProfileName };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * 指定された値が文字列またはnullの場合、ProfileShortNameとしてブランディングして返す。
 *
 * @param shortName - プロファイル短縮名として利用する値。期待される型は文字列またはnull。
 * @returns 入力が有効な場合、ProfileShortNameを含む成功の結果を返し、無効な場合はエラーメッセージ「無効」と共に失敗の結果を返す。
 */
export function createProfileShortName(
  shortName: unknown
): Result<ProfileShortName, Error> {
  if (typeof shortName === "string" || shortName === null) {
    return { ok: true, value: shortName as ProfileShortName };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * 与えられた値が有効な ProfileAddress（文字列または null）かを検証し、その結果を返す。
 *
 * もし入力が文字列または null であれば、成功状態の Result として ProfileAddress 型の値を返します。
 * それ以外の場合は、エラー「無効」を含む失敗状態の Result を返します。
 *
 * @param address - ProfileAddress として有効か検証する対象の値（文字列または null）。
 * @returns 入力が有効な場合、ProfileAddress 型の値を格納した成功の Result。無効な場合は、エラー「無効」を含む失敗の Result。
 */
export function createProfileAddress(
  address: unknown
): Result<ProfileAddress, Error> {
  if (typeof address === "string" || address === null) {
    return { ok: true, value: address as ProfileAddress };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * 入力が文字列または null の場合、ProfileFrom 型の値を返します。
 *
 * 検証対象の値が有効な形式の場合は、その値を ProfileFrom ブランデッド型として返す成功結果を返し、そうでない場合は "無効" というエラーメッセージを含む失敗結果を返します。
 *
 * @param from - 変換対象の値（文字列または null）。
 * @returns 成功時は ProfileFrom 型の値を含む結果、無効な場合はエラーメッセージを含む結果を返します。
 */
export function createProfileFrom(from: unknown): Result<ProfileFrom, Error> {
  if (typeof from === "string" || from === null) {
    return { ok: true, value: from as ProfileFrom };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * プロフィール紹介文のブランデッド型を生成する関数。
 *
 * 指定された入力値が文字列またはnullであるかを検証し、有効な場合はその値をプロフィール紹介文のブランデッド型として返します。
 * 入力が文字列またはnullでない場合は、エラーメッセージ「無効」を含む結果を返します。
 *
 * @param intro プロフィールの紹介文として扱う値。文字列またはnullである必要があります。
 * @returns 入力が有効な場合はプロフィール紹介文のブランデッド型を含む成功結果、無効な場合はエラーを含む結果を返します。
 */
export function createProfileIntroduction(
  intro: unknown
): Result<ProfileIntroduction, Error> {
  if (typeof intro === "string" || intro === null) {
    return { ok: true, value: intro as ProfileIntroduction };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * プロフィールの職業情報を作成する。
 *
 * 入力値が文字列またはnullの場合、ProfileJob型としてブランディングされた値を返す成功結果オブジェクトを生成する。
 * それ以外の場合は、「無効」というエラーメッセージを含む失敗結果オブジェクトを返す。
 *
 * @param job - プロフィールの職業情報。文字列またはnullである必要がある。
 * @returns 成功時はProfileJob型としてブランディングされた値を含む結果オブジェクト、失敗時はエラーを含む結果オブジェクト。
 */
export function createProfileJob(job: unknown): Result<ProfileJob, Error> {
  if (typeof job === "string" || job === null) {
    return { ok: true, value: job as ProfileJob };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * 入力された値をプロフィールスキルとして検証し、ブランディングされた値を返します。
 *
 * 引数が配列または null の場合、プロフィールスキルとして有効と判断され、ブランディングされた値を成功結果として返します。
 * 配列または null 以外の値の場合は、「無効」のエラーメッセージを含む失敗結果が返されます。
 *
 * @param skill - プロフィールスキルを表す値（配列または null が期待される）。
 * @returns 検証結果。成功時はブランディングされたプロフィールスキル、失敗時はエラーオブジェクトを含む結果。
 */
export function createProfileSkill(
  skill: unknown
): Result<ProfileSkill, Error> {
  if (Array.isArray(skill) || skill === null) {
    return { ok: true, value: skill as ProfileSkill };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * 指定された値からProfileLikes型の生成を試みます。
 *
 * 引数が配列またはnullの場合、ProfileLikes型として成功結果を返します。それ以外の場合は、エラーメッセージ「無効」を伴うエラー結果を返します。
 *
 * @param likes プロフィールの「いいね」情報として期待される値。配列またはnullである必要があります。
 *
 * @returns 成功時はProfileLikes型の値を含む結果、失敗時はエラー結果。
 */
export function createProfileLikes(
  likes: unknown
): Result<ProfileLikes, Error> {
  if (Array.isArray(likes) || likes === null) {
    return { ok: true, value: likes as ProfileLikes };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * GitHub のプロフィール URL または null を ProfileGitHub 型に変換するファクトリ関数。
 *
 * 入力が文字列または null の場合、ProfileGitHub 型として正当な値を返します。その他の場合は、エラーメッセージ「無効」を伴うエラー結果を返します。
 *
 * @param github - GitHub のプロフィール URL を表す文字列または null。
 * @returns 入力が有効な場合、branded ProfileGitHub を含む結果オブジェクトを返します。
 */
export function createProfileGitHub(
  github: unknown
): Result<ProfileGitHub, Error> {
  if (typeof github === "string" || github === null) {
    return { ok: true, value: github as ProfileGitHub };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * Qiitaのプロフィールリンクとして有効な値かチェックし、ProfileQiitaブランド型として返します。
 *
 * 入力値が文字列またはnullの場合、成功結果としてその値をProfileQiita型にキャストして返します。
 * それ以外の場合は、エラーメッセージ「無効」を含むエラーを返す失敗結果となります。
 *
 * @param qiita - 文字列またはnullである必要があるQiitaのプロフィールリンクの候補値。
 * @returns 成功時はProfileQiita型を含む結果オブジェクト、失敗時はエラーを含む結果オブジェクトを返します。
 */
export function createProfileQiita(
  qiita: unknown
): Result<ProfileQiita, Error> {
  if (typeof qiita === "string" || qiita === null) {
    return { ok: true, value: qiita as ProfileQiita };
  }
  return { ok: false, error: new Error("無効") };
}

/**
 * 入力値から ProfileZenn 型の値を生成します。
 *
 * 与えられた入力が文字列または null の場合、その値を ProfileZenn 型として成功結果に設定して返します。
 * 入力がこれらの型でない場合は、「無効」というエラーメッセージを含む失敗結果を返します。
 *
 * @param zenn - プロフィールの Zenn リンクとして扱う文字列または null。
 * @returns 成功時は ProfileZenn 型の値を、失敗時はエラーを含む結果を返します。
 */
export function createProfileZenn(zenn: unknown): Result<ProfileZenn, Error> {
  if (typeof zenn === "string" || zenn === null) {
    return { ok: true, value: zenn as ProfileZenn };
  }
  return { ok: false, error: new Error("無効") };
}

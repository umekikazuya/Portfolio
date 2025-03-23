export function createBasicAuthHeader(): string | null {
  const authUser = process.env.NEXT_BASIC_AUTH_USER;
  const authPassword = process.env.NEXT_BASIC_AUTH_PASSWORD;
  if (!authUser || !authPassword) {
    return null;
  }
  const token = Buffer.from(`${authUser}:${authPassword}`).toString("base64");
  return `Basic ${token}`;
}

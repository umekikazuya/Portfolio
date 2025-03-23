import { createBasicAuthHeader } from "@/lib/services/auth";

export async function fetchData<T>(
  url: string,
  options?: RequestInit
): Promise<T | null> {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        ...options?.headers,
        Authorization: createBasicAuthHeader() || "",
      },
      ...options,
    });
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    return null;
  }
}

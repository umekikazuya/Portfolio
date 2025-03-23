export async function fetchData<T>(
  url: string,
  options?: RequestInit
): Promise<T | null> {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        ...options?.headers,
        Authorization: `Basic ${btoa(
          `${process.env.NEXT_BASIC_AUTH_USER}:${process.env.NEXT_BASIC_AUTH_PASSWORD}`
        )}`,
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

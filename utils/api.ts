export async function fetchData<T>(url: string, options?: RequestInit): Promise<T | null> {
  try {
    const response = await fetch(url, { cache: "no-store", ...options });
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    return null;
  }
}

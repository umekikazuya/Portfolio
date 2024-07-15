export async function fetchData<T>(url: string): Promise<T | null> {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data as T;
}

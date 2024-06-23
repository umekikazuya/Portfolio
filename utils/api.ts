export async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("No profile data.");
    }
    return res.json();
  } catch (error) {
    return null;
  }
}

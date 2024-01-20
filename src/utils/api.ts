export async function fetchData<T>(url: string): Promise<T | null> {
  let data: T | null = null;

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
    if (!response.ok) {
      throw new Error('Network error: ' + response.statusText);
    }

    data = await response.json();
  } catch (err) {
    // No script.
  }

  return data;
}

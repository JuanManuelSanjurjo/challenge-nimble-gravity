const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetcher<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, options);
  if (!res.ok) {
    const payload = await res.json().catch(() => {});
    const message = payload?.error || res.statusText;
    const err = new Error(message);
    throw err;
  }
  return res.json();
}

// Base URL of your Spring API
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * Thin fetch wrapper: prepends the base URL, attaches the JWT (if any),
 * sends/parses JSON, and throws on non-2xx so callers can catch errors.
 */
export async function request(path, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(BASE_URL + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed (${res.status})`);
  }

  // 204 No Content (e.g. DELETE) has no body
  return res.status === 204 ? null : res.json();
}
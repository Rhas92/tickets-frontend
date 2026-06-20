import { request } from "./client";

/** POST /login → returns the JWT string. */
export async function login(username, password) {
  const data = await request("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  return data.token;
}
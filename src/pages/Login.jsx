import { useState } from "react";
import { login } from "../api/auth";

/** Login screen: authenticates and lifts the token up via onLogin. */
export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const token = await login(username, password);
      localStorage.setItem("token", token);
      onLogin();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: "4rem auto", display: "grid", gap: 8 }}>
      <h1>Login</h1>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign in</button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </form>
  );
}
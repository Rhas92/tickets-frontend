import { useState } from "react";
import Login from "./pages/Login";
import Tickets from "./pages/Tickets";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return token
    ? <Tickets onLogout={handleLogout} />
    : <Login onLogin={() => setToken(localStorage.getItem("token"))} />;
}
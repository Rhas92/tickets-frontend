import { useEffect, useState } from "react";
import { getTickets, createTicket, deleteTicket } from "../api/tickets";

/** Tickets screen: lists, creates and deletes tickets. */
export default function Tickets({ onLogout }) {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", status: "OPEN", priority: "MEDIUM" });
  const [error, setError] = useState("");

  async function load() {
    try {
      const page = await getTickets();
      setTickets(page.content); // Spring's Page wraps the list in "content"
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => { load(); }, []); // run once when the component mounts

  async function handleCreate(e) {
    e.preventDefault();
    try {
      await createTicket(form);
      setForm({ title: "", description: "", status: "OPEN", priority: "MEDIUM" });
      load();
    } catch (err) { setError(err.message); }
  }

  async function handleDelete(id) {
    try { await deleteTicket(id); load(); }
    catch (err) { setError(err.message); }
  }

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Tickets</h1>
        <button onClick={onLogout}>Logout</button>
      </div>

      <form onSubmit={handleCreate} style={{ display: "grid", gap: 8, marginBottom: 24 }}>
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option>OPEN</option><option>IN_PROGRESS</option><option>CLOSED</option>
        </select>
        <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
          <option>LOW</option><option>MEDIUM</option><option>HIGH</option>
        </select>
        <button type="submit">Create</button>
      </form>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tickets.map((t) => (
          <li key={t.id} style={{ border: "1px solid #ccc", borderRadius: 6, padding: 12, marginBottom: 8 }}>
            <strong>{t.title}</strong> — {t.status} / {t.priority}
            <p style={{ margin: "4px 0" }}>{t.description}</p>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
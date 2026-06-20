import { request } from "./client";

/** GET /tickets (paginated) → returns the Page object. */
export function getTickets(page = 0, size = 20) {
  return request(`/tickets?page=${page}&size=${size}`);
}

/** POST /tickets → creates a ticket. */
export function createTicket(ticket) {
  return request("/tickets", { method: "POST", body: JSON.stringify(ticket) });
}

/** DELETE /tickets/{id} (admin only). */
export function deleteTicket(id) {
  return request(`/tickets/${id}`, { method: "DELETE" });
}
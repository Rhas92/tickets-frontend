# 🎫 Tickets Frontend

A **React** single-page app that puts a friendly face on the
[tickets-api](https://github.com/Rhas92/tickets-api) backend — log in with JWT
and manage support tickets from the browser.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>
---

## ✨ Features

- 🔐 **JWT login** against the Spring Boot API
- 📋 **List** tickets (paginated response from the backend)
- ➕ **Create** tickets with status & priority
- 🗑️ **Delete** tickets (admin only, enforced by the API)
- 🌐 **Deploy-ready**: API URL configurable via environment variable
---

## 🛠️ Tech Stack

| Area      | Tech                       |
| --------- | -------------------------- |
| Library   | React 19                   |
| Build     | Vite                       |
| Language  | JavaScript (JSX)           |
| HTTP      | Native `fetch`             |
| Auth      | JWT stored in localStorage |
 
---

## 🗂️ Project Structure

A clean, layered structure — each folder has one responsibility:

```
src/
├── api/          # HTTP layer: base client + per-resource calls
│   ├── client.js #   fetch wrapper (base URL, JWT, JSON, errors)
│   ├── auth.js   #   POST /login
│   └── tickets.js#   ticket CRUD calls
├── pages/        # full screens
│   ├── Login.jsx
│   └── Tickets.jsx
├── App.jsx       # decides which screen to show (token or not)
└── main.jsx      # entry point — mounts React into #root
```

> The `api/` layer centralizes all backend communication, so screens describe
> *what* they need, not *how* to fetch it — the same separation-of-concerns idea
> as the backend's service/repository layers.
 
---

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+**
- The [tickets-api](https://github.com/Rhas92/tickets-api) backend running
  (locally on `http://localhost:8080`, or deployed)
### Run locally

```bash
npm install
npm run dev
```

The app starts on **http://localhost:5173**.
Log in with the seeded demo user: `admin` / `admin123`.

### Configuration

The backend URL is read from an environment variable, with a safe local default:

| Variable        | Description                 | Default                 |
| --------------- | --------------------------- | ----------------------- |
| `VITE_API_URL`  | Base URL of the tickets API | `http://localhost:8080` |

For production, set `VITE_API_URL` to the deployed API URL — no code change needed.

### Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

The contents of `dist/` can be hosted on any static host (Render Static Site,
Netlify, Vercel, GitHub Pages…).
 
---

## 🔗 Related

- Backend API: [Rhas92/tickets-api](https://github.com/Rhas92/tickets-api)
---

<div align="center">
<sub>Built while learning full-stack — backend-first, one commit at a time. 🚀</sub>
</div>
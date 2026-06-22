# 🎫 Tickets Frontend

A **React** single-page app that puts a friendly face on the [tickets-api](https://github.com/Rhas92/tickets-api) backend — log in with JWT
and manage support tickets from the browser.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Render](https://img.shields.io/badge/Render-Live-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://tickets-frontend-v8gl.onrender.com)

> 🌐 **Live demo:** **<https://tickets-frontend-v8gl.onrender.com>**
> Log in with the seeded demo user: `admin` / `admin123`.
 
---

## 🌐 Live Demo

[#-live-demo](#-live-demo)

The app is deployed as a **static site on Render** and talks to the deployed
[tickets-api](https://github.com/Rhas92/tickets-api) backend.

| | |
| ----------- | ----------------------------------------------- |
| **Frontend** | <https://tickets-frontend-v8gl.onrender.com>    |
| **Login**    | `admin` / `admin123`                            |

> ⏳ **Heads-up:** the backend API runs on Render's free tier, which spins down
> after a period of inactivity. The **first** login after the API has been idle
> may take ~30–60s while the service wakes up — subsequent requests are fast.
 
---

## ✨ Features

[#-features](#-features)

- 🔐 **JWT login** against the Spring Boot API
- 📋 **List** tickets (paginated response from the backend)
- ➕ **Create** tickets with status & priority
- 🗑️ **Delete** tickets (admin only, enforced by the API)
- 🌐 **Live on Render**: deployed as a static site, API URL configurable via environment variable
---


## 🛠️ Tech Stack

[#️-tech-stack](#️-tech-stack)

| Area     | Tech                       |
| -------- | -------------------------- |
| Library  | React 19                   |
| Build    | Vite                       |
| Language | JavaScript (JSX)           |
| HTTP     | Native `fetch`             |
| Auth     | JWT stored in localStorage |
| Hosting  | Render (static site)       |
 
---


## 🗂️ Project Structure

[#️-project-structure](#️-project-structure)

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
> The `api/` layer centralizes all backend communication, so screens describe *what* they need, not *how* to fetch it — the same separation-of-concerns idea
> as the backend's service/repository layers.
---


## 🚀 Getting Started

[#-getting-started](#-getting-started)

### Prerequisites

[#prerequisites](#prerequisites)

- **Node.js 20+**
- The [tickets-api](https://github.com/Rhas92/tickets-api) backend running
  (locally on `http://localhost:8080`, or deployed)
### Run locally

[#run-locally](#run-locally)

```
npm install
npm run dev
```

The app starts on **<http://localhost:5173>**.
Log in with the seeded demo user: `admin` / `admin123`.

### Configuration

[#configuration](#configuration)

The backend URL is read from an environment variable, with a safe local default:

| Variable       | Description                 | Default                 |
| -------------- | --------------------------- | ----------------------- |
| `VITE_API_URL` | Base URL of the tickets API | `http://localhost:8080` |


For production, set `VITE_API_URL` to the deployed API URL — no code change needed.

### Build for production

[#build-for-production](#build-for-production)

```
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

The contents of `dist/` can be hosted on any static host (Render Static Site,
Netlify, Vercel, GitHub Pages…).
 
---


## ☁️ Deploying to Render

[#️-deploying-to-render](#️-deploying-to-render)

This project is deployed as a **Static Site** on Render. To reproduce:

1. **New → Static Site**, connected to this repo.
2. **Build command:** `npm install && npm run build`
3. **Publish directory:** `dist`
4. **Environment variable:** set `VITE_API_URL` to your deployed API URL
   (e.g. the Render URL of `tickets-api`).
5. Add a rewrite rule so client-side routing works:
   **Source** `/*` → **Destination** `/index.html` → **Action** `Rewrite`.
   Render rebuilds and redeploys automatically on every push to `main`.

---


## 🔗 Related

[#-related](#-related)

- Backend API: [Rhas92/tickets-api](https://github.com/Rhas92/tickets-api)

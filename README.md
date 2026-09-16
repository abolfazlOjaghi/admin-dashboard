# Admin Dashboard

A full-featured admin dashboard built with React, Vite, and Tailwind CSS — powered by the [DummyJSON](https://dummyjson.com) API for products, users, and comments.

## 🌐 Live Demo

👉 https://abolfazlojaghi.github.io/admin-dashboard/

**Demo login:**

username: emilys
password: emilyspass


**Authentication**
- JWT-based login with persistent sessions
- Automatic token refresh on expiry (silent, no re-login required)
- Protected routes — unauthenticated users are redirected to `/login`

**Dashboard**
- Revenue overview with switchable Line/Bar charts
- Monthly breakdown table with change indicators
- Best month highlight card
- Product highlights (best/worst rated)
- Latest users and comments

**Products**
- Grid and table view toggle (persisted in localStorage)
- Server-side pagination
- Search with debounce
- Category filtering
- Add new product (form validated with React Hook Form + Zod, includes image upload with preview)
- Delete with confirmation modal

**Users**
- Server-side pagination
- Search by name
- Individual user profile pages with copy-to-clipboard fields
- Highlights the currently logged-in user
- Delete with confirmation modal

**Comments**
- Search by username or comment text
- Delete with confirmation modal

**UX / Polish**
- Full dark mode support
- Responsive layout with a collapsible mobile sidebar
- Skeleton loading states for every data view
- Toast notifications (all mutations are demo-only and clearly labeled as such, since the API doesn't persist changes)
- Graceful error states with retry, distinct from genuine 404s

## 🛠️ Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- TanStack Query (React Query)
- React Hook Form + Zod
- Axios (with request/response interceptors for auth)
- Recharts
- Sonner (toasts)
- react-loading-skeleton
- PNPM

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/abolfazlOjaghi/admin-dashboard.git
```

Navigate to the project folder:

```bash
cd admin-dashboard
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

## 📁 Project Structure

```text
admin-dashboard/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   │   ├── config/
│   │   └── requests/
│   ├── validators/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## ⚠️ Note on Data Persistence

This project uses the free [DummyJSON](https://dummyjson.com) API, which doesn't persist writes. Add/delete actions update the UI and local cache to simulate a real experience, but nothing is saved server-side — this is clearly flagged in the UI via toast messages.
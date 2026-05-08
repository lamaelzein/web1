## 📌 Project Overview

This project is a React + TypeScript application that contains:
- Authentication system (Login / Signup)
- Protected routes using localStorage
- Main dashboard layout
- Profile and Settings pages
- Logout system
- Toast notifications
- AG Grid table
- Material UI buttons
- Tailwind CSS styling
- Alias imports (@pages, @layouts, etc.)

---

## ⚙️ Tech Stack

- React (Vite + TypeScript)
- React Router DOM
- Tailwind CSS
- Material UI
- AG Grid
- React Hot Toast

---

## 📁 Project Architecture

I used a **feature-based + layered architecture**:

- layouts → shared layouts (Auth / Main)
- pages → all screens (Login, Dashboard, etc.)
- routes → routing system
- services → reusable logic (toast)
- aliases → clean imports (@pages, @layouts)

This makes the project:
- scalable
- clean
- easy to maintain

---

## 🚀 Project Setup Steps

### 1. Create project

```bash
npm create vite@latest my-app -- --template react-ts

2. Install dependencies

npm install
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite
npm install @mui/material @emotion/react @emotion/styled
npm install ag-grid-react ag-grid-community
npm install react-hot-toast

🎨 Styling Setup

Tailwind CSS

Installed Tailwind and added:

@import "tailwindcss";

inside index.css.

🔗 Aliases Setup

In vite.config.ts:

@pages
@layouts
@routes
@services

This allows clean imports like:

import Login from "@pages/Login";
🔐 Authentication Flow
Login page:
User clicks login
Confirmation popup appears
Loading spinner for 3 seconds
isLoggedIn saved in localStorage
Redirect to dashboard
Signup page:
Simple UI (no backend)
🧠 Protected Routes

If user is NOT logged in:

Redirect to login page

If user IS logged in:

Access main layout

Stored in:

localStorage.getItem("isLoggedIn")
🏠 Main Layout Features

Inside main layout:

Sidebar navigation
Dashboard
Profile
Settings
Logout button

🚪 Logout System

When clicking logout:

Remove localStorage value
Redirect to login page
localStorage.removeItem("isLoggedIn")
📊 Dashboard Features
3 Material UI buttons:
Success
Warning
Error
AG Grid table showing sample data
🔔 Toast Notifications

Using react-hot-toast:

success messages on login
global notifications system
🌿 Git Workflow
1. Create project branch
git init
git add .
git commit -m "initial project setup"
2. Create new branch for main features
git checkout -b main-layout
3. Add main features
dashboard
profile
settings
logout
4. Merge branch
git checkout master
git merge main-layout
🧾 Summary

This project demonstrates:

authentication flow
protected routing
clean architecture
reusable components
modern UI design
proper TypeScript setup
professional React structure
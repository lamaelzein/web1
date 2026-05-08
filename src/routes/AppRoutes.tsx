import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "@layouts/AuthLayout";
import MainLayout from "@layouts/MainLayout";

import Login from "@pages/Login";
import Signup from "@pages/Signup";

import Dashboard from "@pages/Dashboard";
import Profile from "@pages/Profile";
import Settings from "@pages/Setting";

function AppRoutes() {

  
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Routes>

      <Route element={<AuthLayout />}>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route
        element={
          isLoggedIn
            ? <MainLayout />
            : <Navigate to="/login" />
        }
      >

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

      <Route
        path="*"
        element={<Navigate to="/login" />}
      />

    </Routes>
  );
}

export default AppRoutes;
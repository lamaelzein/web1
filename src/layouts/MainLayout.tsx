import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>

      <nav className="bg-black text-white p-4 flex gap-4">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

      </nav>

      <div className="p-6">
        <Outlet />
      </div>

    </div>
  );
}
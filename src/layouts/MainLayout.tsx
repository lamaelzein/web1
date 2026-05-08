import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen">

      <div className="w-64 bg-black text-white p-5">

        <h1 className="text-2xl mb-5">
          Main Layout
        </h1>

        <div className="flex flex-col gap-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </div>

      </div>

      <div className="flex-1 p-5 bg-gray-100">
        <Outlet />
      </div>

    </div>
  );
}

export default MainLayout;
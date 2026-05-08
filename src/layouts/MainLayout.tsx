import { Outlet, Link, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-5">
        <h1 className="text-2xl mb-5">Main Layout</h1>

        <div className="flex flex-col gap-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 bg-gray-100">

        {/* TOP BAR */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <Outlet />

      </div>

    </div>
  );
}

export default MainLayout;
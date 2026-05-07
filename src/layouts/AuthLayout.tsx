import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">

        <Outlet />

      </div>

    </div>
  );
}
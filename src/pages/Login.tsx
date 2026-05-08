import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { successMessage } from "../services/ToastService";

function Login() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {

    const confirmMessage = window.confirm(
      "Are you sure to open main layout?"
    );

    if (!confirmMessage) return;

    setLoading(true);

    localStorage.setItem("isLoggedIn", "true");

    successMessage("Login Success");

    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-96">

      <h1 className="text-3xl font-bold mb-5">
        Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 mb-4 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 mb-4 rounded"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-3 rounded"
      >
        Login
      </button>

      {loading && (
        <div className="mt-4 text-center">
          Loading Spinner...
        </div>
      )}

      <p className="mt-4">
        No account?
        <Link
          to="/signup"
          className="text-blue-500 ml-2"
        >
          Signup
        </Link>
      </p>

    </div>
  );
}

export default Login;
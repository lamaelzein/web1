import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-96">

      <h1 className="text-3xl font-bold mb-5">
        Signup
      </h1>

      <input
        type="text"
        placeholder="Username"
        className="w-full border p-3 mb-4 rounded"
      />

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

      <button className="w-full bg-black text-white py-3 rounded">
        Signup
      </button>

      <p className="mt-4">
        Already have account?

        <Link
          to="/login"
          className="text-blue-500 ml-2"
        >
          Login
        </Link>

      </p>

    </div>
  );
}

export default Signup;
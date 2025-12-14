import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();

    // Example login check (you can replace with real logic)
    if (username && password) {
      navigate("/dashboard"); // redirect to dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={onsubmit} className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        <div className="mb-4">
          <label className="text-gray-700 font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 w-full p-3 bg-gray-100 rounded-xl"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full p-3 bg-gray-100 rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

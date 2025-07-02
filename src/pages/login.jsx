import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Normally you’d validate here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left side - Branding */}
        <div className="text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-5xl font-extrabold text-blue-500 mb-4">MyApp</h1>
          <p className="text-gray-300 text-xl max-w-md">
            Connect with friends and the world around you using MyApp.
          </p>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-white text-2xl font-semibold mb-6">Log In</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Log In
            </button>
            <div className="text-center mt-4">
              <Link
                to="/forgot-password"
                className="text-blue-400 hover:underline text-sm"
              >
                Forgotten password?
              </Link>
            </div>
          </form>

          <hr className="my-6 border-gray-700" />

          <div className="text-center">
            <Link
              to="/register"
              className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-semibold transition"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

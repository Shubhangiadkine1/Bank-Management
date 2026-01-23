
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 
                      transform transition-transform hover:-translate-y-3 hover:transition-all duration-700 hover:scale-105 hover:shadow-amber-800 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          Sign In
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Login to your bank account
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Account Number
            </label>
            <input
              type="text"
              placeholder="Enter account number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8 text-sm">
          © 2026 Bank Management System
        </p>
      </div>
    </div>
  );
};

export default Login;

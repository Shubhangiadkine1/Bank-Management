import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      
      {/* Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-105 animate-fadeIn">
        
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Bank Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold tracking-wide 
                       hover:bg-blue-800 hover:shadow-lg transform hover:-translate-y-1 
                       transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p
          onClick={() => navigate("/register")}
          className="text-center text-blue-700 mt-5 cursor-pointer hover:underline transition"
        >
          New user? Create an account
        </p>
      </div>
    </div>
  );
}

export default Login;

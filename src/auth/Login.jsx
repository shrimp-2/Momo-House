import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  const login = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="shadow-2xl bg-white p-10 w-96 rounded-3xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={login} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-700 text-white rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all duration-200"
          >
            Login
          </button>
          <div className="flex items-center justify-center space-x-2 ">
            <span className="text-sm text-gray-400">or</span>
          </div>
          <button
            onClick={() => loginWithRedirect()}
            className="w-full flex items-center justify-center gap-x-3 py-2 px-4 border-2 border-gray-300 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            <FcGoogle size={22} />
            <span>Login with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

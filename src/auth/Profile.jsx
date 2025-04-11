import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Profile() {
  const { user, logout } = useAuth0();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6 mb-12">
      <div className="flex items-center space-x-6">
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-20 h-20 rounded-full border-4 border-blue-300 shadow-sm"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
          <p className="text-sm text-gray-600">
            <strong>Email Verified:</strong>
            {user?.email_verified ? "Yes" : "No"}
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          logout()
        }}
        className="block w-24 bg-red-500 text-white font-medium py-2 rounded-lg hover:bg-red-600 transition duration-200 mx-auto"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;

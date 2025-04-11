import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import momologo from "../assets/Navbar/Momologo.png";
import { CartContext } from "../Context/CartProvider";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const { user, logout, isAuthenticated } = useAuth0();
  const { state } = useContext(CartContext);

  let totalItem = state.items.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);

  return (
    <div className="flex justify-around items-center py-3 px-6">
      <div className="flex gap-x-2 items-center">
        <img src={momologo} alt="Momo Logo" className="w-8 h-8" />
        <NavLink to="/" className="text-green-950 text-2xl font-bold">
          momos
        </NavLink>
      </div>

      <div className="flex space-x-6 text-gray-600 text-lg font-medium">
        <NavLink to="/about" className="hover:text-black">
          About Us
        </NavLink>
        <NavLink to="/menu" className="hover:text-black">
          Our Menu
        </NavLink>
        <NavLink to="/services" className="hover:text-black">
          Our Services
        </NavLink>
        <NavLink to="/allergyAdvice" className="hover:text-black">
          Allergy Advice
        </NavLink>
        <NavLink
          to="/cartpage"
          className="text-gray-600 hover:text-black relative"
        >
          <span className="absolute -top-4 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalItem}
          </span>
          <BsCart4 size={28} />
        </NavLink>
        {isAuthenticated ? (
          <button
            onClick={() => {
              logout();
            }}
            className="hover:text-black"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="hover:text-black">
            Login
          </NavLink>
        )}
      </div>

      <div className="flex items-center gap-x-4">
        <NavLink
          to="https://www.facebook.com/"
          className="bg-gray-300 p-2 rounded-full"
        >
          <FaFacebookF className="text-gray-500" />
        </NavLink>
        <NavLink
          to="https://www.tiktok.com/"
          className="bg-gray-300 p-2 rounded-full"
        >
          <FaTiktok className="text-gray-500" />
        </NavLink>
        <NavLink
          to="https://www.instagram.com/"
          className="bg-gray-300 p-2 rounded-full"
        >
          <FiInstagram className="text-gray-500" />
        </NavLink>
        <NavLink
          className="bg-orange-700 py-2 px-5 rounded-3xl text-white font-semibold"
          to="/contact"
        >
          Contact Us
        </NavLink>

        {isAuthenticated && (
          <NavLink
            to="/profile"
            className="flex items-center space-x-2 px-3 py-1 hover:text-black hover:bg-gray-100 rounded-full transition duration-200"
          >
            <img
              src={user?.picture}
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-300"
            />
            <span className="font-medium text-gray-700">Profile</span>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navigation;

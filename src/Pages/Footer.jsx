import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import momologo from "../assets/Navbar/MomoLogo.png";

function Footer() {
  return (
    <div className="bg-white py-12 px-5 md:px-20 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div >
          <div className="flex items-center gap-2">
            <img src={momologo} alt="Momo Logo" className="w-10 h-10" />
            <h1 className="text-teal-700 text-2xl font-bold">momos</h1>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc
            nullam morbi urna amet suspendisse nullam ac vivamus.
          </p>
        </div>

        <div className="pl-20">
          <h2 className="text-lg text-teal-700 font-semibold mb-4">momos</h2>
          <div className="flex flex-col space-y-3 text-gray-600 text-sm">
            <NavLink to="/about" className="hover:text-teal-700">About Us</NavLink>
            <NavLink to="/menu" className="hover:text-teal-700">Our Menu</NavLink>
            <NavLink to="/services" className="hover:text-teal-700">Our Services</NavLink>
            <NavLink to="/contact" className="hover:text-teal-700">Contact Us</NavLink>
          </div>
        </div>

        <div>
          <h2 className="text-lg text-teal-700 font-semibold mb-4">Legals</h2>
          <div className="flex flex-col space-y-3 text-gray-600 text-sm">
            <NavLink to="/terms" className="hover:text-teal-700">Terms & Conditions</NavLink>
            <NavLink to="/privacy" className="hover:text-teal-700">Privacy Policy</NavLink>
            <NavLink to="/support" className="hover:text-teal-700">Support</NavLink>
          </div>
        </div>

        <div>
          <h2 className="text-lg text-teal-700 font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-gray-500 text-xl">
            <NavLink to="https://www.facebook.com/" target="_blank" className="hover:text-teal-700">
              <FaFacebookF />
            </NavLink>
            <NavLink to="https://www.linkedin.com/" target="_blank" className="hover:text-teal-700">
              <FaLinkedinIn />
            </NavLink>
            <NavLink to="https://x.com/" target="_blank" className="hover:text-teal-700">
              <FaTwitter />
            </NavLink>
          </div>
          <div className="flex space-x-4 text-gray-500 text-xl mt-4">
            <NavLink to="https://www.youtube.com/" target="_blank" className="hover:text-teal-700">
              <FaYoutube />
            </NavLink>
            <NavLink to="https://www.instagram.com/" target="_blank" className="hover:text-teal-700">
              <FaInstagram />
            </NavLink>
            <NavLink to="https://www.tiktok.com/" target="_blank" className="hover:text-teal-700">
              <FaTiktok />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10  pt-4 text-sm">
        Copyright &copy; 2023 Everest Momo Pvt Ltd. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
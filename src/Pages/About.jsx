import React from "react";
import {  FaPlay } from "react-icons/fa";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import chef2 from "../assets/About/chef2.png";
import women from "../assets/About/women.png";
import men1 from "../assets/About/men1.png";
import plate from "../assets/About/plate.png";
import women2 from "../assets/About/women2.png";
import plate2 from "../assets/About/plate2.png";
import men3 from "../assets/About/men3.png";
import plate3 from "../assets/About/plate3.png";
import women4 from "../assets/About/women4.png";
import background from "../assets/About/background.png";
import headchef from "../assets/About/headchef.png";
import Achef from "../assets/About/Achef.png";
import Achef2 from "../assets/About/Achef2.png";
function AboutUs() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16">
        <div className="md:w-1/2 space-y-3">
          <h2 className="text-green-900 text-3xl md:text-4xl italic font-semibold">
            About Us
          </h2>
          <p className="text-gray-500 uppercase text-sm tracking-wider">
            We pride ourself on
          </p>
          <p className="text-lg md:text-2xl font-semibold">
            <span className="text-orange-600">Our authentic momo recipes</span>
            <br />
            <span className="text-gray-900">
              passed down through generations
            </span>
          </p>
        </div>
        <div className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={women}
            alt="Chef"
            className="relative w-72 md:w-96 object-contain z-20"
          />
        </div>
      </div>

      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <img
          src={chef2}
          alt="Chef in kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-14 lg:px-20">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold leading-tight">
            Process behind the making
          </h2>
          <p className="text-gray-300 mt-2 text-sm md:text-lg lg:text-xl max-w-lg">
            See how we make momos that you like from only the best ingredients.
          </p>

          <NavLink
            to="https://youtu.be/-AuK92Jq4yQ?si=GULtN-w8DilDtwMy"
            target="_blank"
            className="flex items-center gap-3 bg-[#0C6967] text-white px-5 py-2 md:px-6 md:py-3 rounded-full mt-4 text-sm md:text-lg font-semibold hover:bg-[#0A5A58] transition-all duration-300 shadow-lg w-fit"
          >
            <FaPlay className="text-white text-sm md:text-lg" />
            Watch the Video
          </NavLink>
        </div>
      </div>

      <div className="bg-white text-white px-10 py-20 space-y-24">
      
      <div className="flex flex-col md:flex-row items-center gap-10">
  
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold">
            <span className="text-[#6B788E]">Our momos are </span>
            <span className="text-orange-600">made with love</span>
          </h1>
          <p className="text-[#6B788E]">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
       
        <div className="relative md:w-1/2">
          <img
            src={men1}
            alt="Chef Preparing Momos"
            className="rounded-lg w-full"
          />
          <img
            src={plate}
            alt="Plate of momos"
            className="absolute -bottom-10 left-5 -translate-x-1/2 w-48"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
       
        <div className="relative md:w-1/2">
          <img
            src={women2}
            alt="Chef Serving Momos"
            className="rounded-lg w-full"
          />
          <img
            src={plate2}
            alt="Plate of fried momos"
            className="absolute -bottom-10 -right-40 -translate-x-1/2 w-48"
          />
        </div>
   
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold">
            <span className="text-[#6B788E]">Taste the difference with </span>
            <span className="text-orange-600">our handcrafted momos</span>
          </h1>
          <p className="text-[#6B788E]">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold">
            <span className="text-[#6B788E]">Our momos are the </span>
            <span className="text-orange-800">perfect blend of tradition</span>
            <span className="text-[#6B788E]"> and </span>
            <span className="text-orange-600">innovation</span>
          </h1>
          <p className="text-[#6B788E">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
        <div className="relative md:w-1/2">
          <img
            src={men3}
            alt="Chef Holding Momos"
            className="rounded-lg w-full"
          />
          <img
            src={plate3}
            alt="Plate of momos"
            className="absolute -bottom-10 -left-5 -translate-x-1/2 w-48"
          />
        </div>
      </div>
    </div>
  
    <div className="w-full h-[90vh] flex flex-col md:flex-row overflow-hidden rounded-lg relative">
      <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 md:p-16 text-white">
        <img
          src={background}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105"
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      
        <div className="relative z-10 space-y-6 max-w-xl">
          <FaQuoteLeft className="text-4xl text-white" />

          <p className="text-lg md:text-xl leading-relaxed">
            Momo is not just about sustenance, it's about bringing people together and creating memories.
            At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy
            delicious momo, great company, and unforgettable experiences.
          </p>

          <div>
            <h3 className="text-xl font-bold">Marcus Schleifer</h3>
            <p className="uppercase text-sm text-gray-300">CEO</p>
          </div>
          <div className="flex gap-4 pt-4">
            <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full">
              <FaChevronLeft size={16} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full">
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full">
        <img
          src={women4} 
          alt="CEO"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div className="bg-white text-white py-16 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-white">Meet The </span>
          <span className="text-orange-500">Team</span>
        </h2>
        <p className="text-teal-400 mt-2">
          Our talented team members who delivers only the best results
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="relative h-[420px] rounded-lg overflow-hidden shadow-md">
          <img
            src={headchef}
            alt="Head Chef"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-6">
            <h3 className="text-lg font-semibold">Head Chef</h3>
          </div>
        </div>

        <div className="relative h-[420px] rounded-lg overflow-hidden shadow-md">
          <img
            src={Achef}
            alt="Assistant Chef"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-6">
            <h3 className="text-lg font-semibold">Assistant Chef</h3>
          </div>
        </div>
        <div className="relative h-[420px] rounded-lg overflow-hidden shadow-md">
          <img
            src={Achef2}
            alt="Assistant Chef"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-6">
            <h3 className="text-lg font-semibold">Assistant Chef</h3>
          </div>
        </div>
      </div>

      <div className="flex items-center  mt-10 px-2">
        <div className="flex gap-4">
          <button className="bg-red-300 hover:bg-white/20 p-3 rounded-full text-black">
            <FaChevronLeft size={14} />
          </button>
          <button className="bg-red-300 hover:bg-white/20 p-3 rounded-full text-black">
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default AboutUs;

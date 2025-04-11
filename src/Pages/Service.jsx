import React from "react";
import chef from "../assets/services/chef.png";
import background from "../assets/services/background.png";
import people from "../assets/services/people.png";
import people2 from "../assets/services/people2.png";
import party from "../assets/services/party.png";
import catering from "../assets/services/catering.png";
import QR from "../assets/services/QR.png";
import QR2 from "../assets/services/QR2.png";
import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Service() {
  return (
    <div>
      <div className="bg-white px-6 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl text-teal-800 font-[BrushScriptMT,cursive] mb-4">
              Our Services
            </h2>
            <p className="uppercase text-gray-500 tracking-wider mb-4">
              Knowing our customers needs
            </p>
            <p className="text-orange-600 text-xl font-bold mb-2">
              We're more than just momos.
            </p>
            <p className="text-gray-800 text-lg font-medium">
              We're a full-service dining experience.
            </p>
          </div>
          <div className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={chef}
              alt="Chef"
              className="relative w-72 md:w-96 object-contain z-20"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={background}
          alt="Momos Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-20 text-white z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dine With Us</h2>
          <p className="text-base md:text-lg mb-4 max-w-md">
            Enjoy our momos in the comfort of your own home with our delivery
            services.
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

      <div className="w-full bg-white py-12 px-4 md:px-12 space-y-20">
  <div className="space-y-4">
    <div>
      <img
        src={party}
        alt="Section Top Private Party"
        className="w-8 md:w-16"
      />
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="flex-1 space-y-3">
        <h3 className="text-lg md:text-xl font-bold">Private Party</h3>
        <p className="text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
          adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
        </p>

        <div className="flex items-center justify-between w-[456px] h-[152px] bg-white shadow-md rounded-[12px] pt-4 pr-4 pb-4 pl-6 mt-4">
          <div>
            <p className="text-teal-700 text-sm font-semibold">
              Scan the QR code
            </p>
            <p className="text-xs text-gray-400">
              You can also check about the service
            </p>
          </div>
          <img src={QR} alt="QR Code" className="w-12 h-12" />
        </div>
      </div>

      <div className="flex-1">
      <img
  src={people}
  alt="Private Party"
  className="rounded-lg shadow-md object-cover w-[552px] h-[448px]"
/>

      </div>
    </div>
  </div>

  <div className="space-y-4">
    <div>
      <img
        src={catering}
        alt="Section Top Catering"
        className="w-8 md:w-16"
      />
    </div>
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
      <div className="flex-1 space-y-3">
        <h3 className="text-lg md:text-xl font-bold">Catering</h3>
        <p className="text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
          adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
        </p>

        <div className="flex items-center justify-between w-[456px] h-[152px] bg-white shadow-md rounded-[12px] pt-4 pr-4 pb-4 pl-6 mt-4">
          <div>
            <p className="text-teal-700 text-sm font-semibold">
              Scan the QR code
            </p>
            <p className="text-xs text-gray-400">
              You can also check about the service
            </p>
          </div>
          <img src={QR2} alt="QR Code" className="w-12 h-12" />
        </div>
      </div>

      <div className="flex-1">
        <img
          src={people2}
          alt="Catering"
          className="rounded-lg shadow-md object-cover w-[552px] h-[448px]"
        />
      </div>
    </div>
  </div>
</div>


      <div className="bg-white rounded-3xl py-16 px-4 sm:px-8 mx-4 sm:mx-auto max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Got any Queries?
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
          If you have any queries, send us a message. Our friendly team would
          love to hear from you
        </p>
        <NavLink to="/contact" className="bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-teal-800 transition duration-300">
          Get In Touch
        </NavLink>
      </div>

    </div>
  );
}

export default Service;

import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="py-16 bg-white text-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-teal-700">
          Our Contact
        </h2>
        <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
          Get in touch
        </p>
        <p className="mt-4 text-lg md:text-xl">
          <span className="text-orange-500 font-semibold">
            Our Friendly Team
          </span>{" "}
          would love to hear from you
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <h3 className="text-sm font-semibold uppercase">Location</h3>
            </div>
            <p className="text-sm italic text-gray-700">
              New Baneshwor - 41201, <br />
              Kathmandu, Bagmati, Nepal
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-orange-500 text-xl" />
              <h3 className="text-sm font-semibold uppercase">Phone</h3>
            </div>
            <p className="text-sm">
              <span className="font-semibold text-teal-700">Mobile:</span>{" "}
              (+977) 980 5689789 <br />
              <span className="font-semibold text-teal-700">Mobile:</span>{" "}
              (+977) 9841 275897 <br />
              <span className="font-semibold text-teal-700">Tel:</span>{" "}
              01-4783972
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-orange-500 text-xl" />
              <h3 className="text-sm font-semibold uppercase">Service Time</h3>
            </div>
            <p className="text-sm">
              <span className="font-semibold text-teal-700">Mon - Fri</span>{" "}
              &nbsp;&nbsp; 8 am - 8 pm <br />
              <span className="font-semibold text-teal-700">
                Sat - Sun
              </span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-16 py-12 bg-white">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-1/2 h-[500px]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56524.975474686406!2d85.3213184!3d27.6922368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1743050879133!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="pl-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              If you have any queries, send us a message. Our friendly team
              would love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="input-style border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition rounded-md px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-style border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition rounded-md px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <select className="input-style border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition rounded-md px-4 py-2 text-gray-600">
                <option>What can we do for you</option>
                <option>General Inquiry</option>
                <option>Reservation</option>
                <option>Support</option>
              </select>
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="input-style border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition rounded-md px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-style border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition rounded-md px-4 py-2"
              />
            </div>

            <div className="mb-6">
              <textarea
                rows="4"
                placeholder="Message"
                className="input-style border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition rounded-md px-4 py-2 resize-none"
              ></textarea>
            </div>

            <button className="w-full md:w-auto px-6 py-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition duration-300 shadow-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

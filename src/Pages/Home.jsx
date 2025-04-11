import { NavLink } from "react-router-dom";
import circle from "../assets/Home/circle.png";
import Momo from "../assets/Home/Momo.png";
import OneBg from "../assets/Home/OneBg.png";
import Man from "../assets/Home/Men.png";
import women from "../assets/Home/women.png";
import men2 from "../assets/Home/men2.png";
import quality from "../assets/Home/qualityfood.png";
import party from "../assets/Home/party.png";
import catering from "../assets/Home/catering.png";
import { BsArrowRightShort } from "react-icons/bs";
import Navigatebutton from "../components/Navigatebutton";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import Loading from "../components/Loading";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setRecipes(response.recipes);
    const filetritem = response.recipes.filter((item) => {
      return item.cuisine == "Italian";
    });
    setFilterProduct(filetritem);
  };

  const FilterRecipes = (country) => {
    const filetritem = recipes.filter((item) => {
      return item.cuisine == country;
    });
    setFilterProduct(filetritem);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center  ">
        <div className="px-24">
          <div className="max-w-xl">
            <p className="text-xs tracking-widest text-gray-500 mb-2 font-medium">
              RESTAURANT
            </p>

            <h1 className="text-[58px] font-semibold flex items-center gap-2">
              The{" "}
              <span
                className="bg-no-repeat bg-center bg-contain h-20 w-44 flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${OneBg})` }}
              >
                #One
              </span>
            </h1>

            <h1 className="text-[58px] font-semibold">
              Momo <span className="text-[#D95103]">Restaurant</span>
            </h1>

            <p className="text-[20px] font-medium mt-4">
              More than{" "}
              <span className="text-[#D95103] font-semibold">
                20+ Varieties
              </span>{" "}
              of momo available for you
            </p>

            <div className="mt-6">
              <NavLink
                to="/menu"
                className="bg-[#0C6967] hover:bg-[#0b5956] px-6 py-3 rounded-3xl text-white text-lg flex items-center gap-2 w-fit"
              >
                Explore Food Menu
                <BsArrowRightShort size={28} />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="overflow-hidden  w-[600px]  relative   flex justify-end">
          <img
            className="h-[311px] top-14 right-8 absolute  "
            src={Momo}
            alt="Momo"
          />
          <img className="h-[500px] -mt-4  " src={circle} alt="circle" />
        </div>
      </div>

      <div className="w-[1440px] h-[726px] flex items-center justify-center gap-[86px] px-[156px] py-16">
        <div className="relative w-[490px] h-[598px] flex justify-center items-end">
          <img src={Man} alt="Man" className="relative z-10 w-[90%] h-auto" />
        </div>

        <div className="max-w-[500px] text-[#101828]">
          <h3 className="text-4xl font-bold text-[#101828]">
            Why Customers <span className="text-orange-500">Love Us</span>
          </h3>
          <p className="text-lg text-gray-400 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            alias nemo saepe quam, cumque suscipit in praesentium laudantium,
            dolores quod, commodi quis adipisci sed iste dolore omnis. Totam,
            expedita modi.
          </p>
          <NavLink
            to="/about"
            className="mt-6 inline-flex items-center bg-[#0C6967] text-white text-lg font-medium px-6 py-3 rounded-full hover:bg-teal-900 transition-all"
          >
            Explore Our Story
            <BsArrowRightShort size={28} className="ml-2" />
          </NavLink>
        </div>
      </div>

      <div className="py-16 px-5 md:px-20 bg-white">
        <div className="text-center mb-10">
          <h1 className="text-[39px] font-bold text-grey-900">
            our <span className="text-[#D95103]">Most Popular</span> Recipies
          </h1>
          <p className="text-[20px] text-grey-600 mt-2 max-w-2xl mx-auto">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="text-center  space-x-4 mb:8">
          <button
            onClick={() => {
              FilterRecipes("Italian");
            }}
            className="border-2 rounded-2xl p-1 w-24 hover:bg-amber-100"
          >
            Italian
          </button>
          <button
            onClick={() => {
              FilterRecipes("Korean");
            }}
            className="border-2 rounded-2xl p-1 w-24  hover:bg-amber-100"
          >
            Korean
          </button>
          <button
            onClick={() => {
              FilterRecipes("Indian");
            }}
            className="border-2 rounded-2xl p-1 w-24  hover:bg-amber-100"
          >
            Indian
          </button>
        </div>

        <div className=" border-grey-200 pt-8">
          {filterProduct.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
              {filterProduct.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="shadow-lg rounded-xl overflow-hidden"
                  >
                    <img
                      className="w-full h-[300px] object-cover rounded-xl shadow-md"
                      src={item.image}
                      alt="recipes"
                    />
                    <NavLink to={`/productdescription/${item.id} `}>
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-orange-500">
                          Rs.{item.caloriesPerServing}
                        </p>
                        <p>{item.name}</p>
                        <p className="text-orange-800">{item.rating}</p>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="m-auto flex items-center">
              <Loading />
            </div>
          )}
        </div>

        <div className="flex justify-center mt-10">
          <Navigatebutton />
        </div>
      </div>

      <div className="bg-white">
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            <span className="text-[#D95103] font-bold">We Offer People</span>
            The Service They Want
          </h1>
        </div>

        <div className="relative w-full h-[700px]">
          <img
            src={men2}
            alt="Chef in kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Process behind the making
            </h2>
            <p className="text-gray-200 mt-2">
              See how only chefs cook only the best momos
            </p>

            <NavLink
              to="https://youtu.be/-AuK92Jq4yQ?si=GULtN-w8DilDtwMy"
              target="_blank"
              className="flex items-center gap-2 bg-teal-500 text-white px-6 py-2 rounded-full mt-5 hover:bg-teal-600 transition"
            >
              <FaPlay /> Watch the Video
            </NavLink>
          </div>
        </div>

        <div className="bg-white py-16 px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg text-center">
              <img
                src={quality}
                alt="Quality Food"
                className="mx-auto w-16 h-16"
              />
              <h3 className="text-xl font-bold mt-3">Quality Food</h3>
              <p className="text-gray-600 mt-2">
                Only the best food with top quality products and ingredients
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg  text-center">
              <img
                src={party}
                alt="Private Party"
                className="mx-auto w-16 h-16"
              />
              <h3 className="text-xl font-bold mt-3">Private Party</h3>
              <p className="text-gray-600 mt-2">
                Get the best food for all your private parties and gatherings
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <img
                src={catering}
                alt="Catering"
                className="mx-auto w-16 h-16"
              />
              <h3 className="text-xl font-bold mt-3">Catering</h3>
              <p className="text-gray-600 mt-2">
                Get the best food for any occasions and gatherings
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <NavLink
              className="bg-[#0C6967] p-3 flex justify-center items-center gap-x-2 w-60 mx-auto rounded-full text-white text-lg font-semibold hover:bg-[#085452] transition"
              to="/service"
            >
              Explore Our Services
              <BsArrowRightShort size={28} />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-5 md:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="text-black">200+</span>{" "}
              <span className="text-orange-600">Happy Customers</span>
            </h2>
            <p className="text-teal-700 font-semibold text-lg">
              What our customers say about us
            </p>
            <p className="text-gray-600 italic">
              “Only the best momo you can find in the market. Different
              varieties of momo to choose from. Will be visiting again soon”
            </p>
            <p className="text-black font-bold">Livia Dias</p>

            <div className="flex space-x-4 mt-4">
              <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition">
                <FaArrowLeft />
              </button>
              <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div>
            <img
              src={women}
              alt="Customer"
              className="w-[456px] h-[576px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-black">
            <span className="text-black font-bold">Get</span>{" "}
            <span className="text-[#D95103]">In Touch</span>
          </h2>
          <p className="text-teal-700 font-semibold mt-1">
            Our Friendly team would love to hear from you
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg mt-8 flex flex-col md:flex-row">
          <div className="bg-[#0C6967] text-white p-6 md:w-1/3 rounded-lg md:rounded-l-lg">
            <div className="flex items-start gap-3 mb-6">
              <FaMapMarkerAlt size={20} className="mt-1" />
              <div>
                <h3 className="font-bold">Our Address</h3>
                <p className="text-sm italic">
                  New Baneshwor, Kathmandu, Bagmati, Nepal
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <FaPhone size={20} className="mt-1" />
              <div>
                <h3 className="font-bold">Our Contacts</h3>
                <p className="text-sm">
                  <span className="font-semibold">Mobile:</span> 980 5689789,
                  9841 275897 <br />
                  <span className="font-semibold">Landline:</span> 01-4783972
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock size={20} className="mt-1" />
              <div>
                <h3 className="font-bold">Our Service Time</h3>
                <p className="text-sm">
                  <span className="font-semibold">MON - FRI:</span> 10 am - 8 pm
                  <br />
                  <span className="font-semibold">SAT - SUN:</span>{" "}
                  <span className="italic">Closed</span>
                </p>
              </div>
            </div>

            <p className="text-sm italic mt-6">
              Get in touch in social networks
            </p>
            <div className="flex gap-4 mt-3">
              <FaFacebookF size={20} />
              <FaInstagram size={20} />
              <FaTiktok size={20} />
            </div>
          </div>

          <div className="p-6 md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded-md w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded-md w-full mt-4"
            />

            <select className="border p-2 rounded-md w-full mt-4">
              <option>What can we do for you</option>
            </select>

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-2 rounded-md w-full mt-4"
            />

            <textarea
              placeholder="Message"
              className="border p-2 rounded-md w-full mt-4 h-24"
            ></textarea>

            <button className="bg-[#D95103] text-white px-5 py-2 rounded-full mt-4 w-full md:w-auto">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56524.975474686406!2d85.3213184!3d27.6922368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1743050879133!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;

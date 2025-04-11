import React from "react";
import chef from "../assets/services/chef.png";
import bg from "../assets/allergy/bg.png";
import bg1 from "../assets/allergy/bg1.png";
import bg3 from "../assets/allergy/bg3.png";
import qr from "../assets/allergy/qr.png";
function AllergyAdvice() {
  
const ingredients = [
  {
    title: 'For the Dough',
    items: [
      '120 gms refined flour',
      '1/4 tsp baking powder',
      '1/2 tsp salt water (for kneading)',
    ],
  },
  {
    title: 'For the Chicken Filling:',
    items: [
      '1 cup chicken (minced)',
      '1/2 cup onions, finely chopped',
      '1/4 tsp black pepper powder',
      '1 tbsp oil',
      '1/2 tsp garlic paste',
      '1/2 tsp soya sauce',
      'Salt',
      '1/4 tsp vinegar',
    ],
  },
  {
    title: 'For the Vegetarian Filling:',
    items: [
      '1 cup cabbage and carrots, grated',
      '2 tbsp onions, finely chopped',
      '1/2 tsp garlic, finely chopped',
      '1 tbsp oil',
      '1/4 tsp vinegar',
      '1/2 tsp soya sauce',
      'to taste salt',
      'to taste pepper',
      '1 tbsp cornflour',
    ],
  },
  {
    title: 'For Chilli Sauce:',
    items: [
      '25 gm garlic, peeled',
      '6 gm whole red chillies',
      '3 tbsp vinegar',
      '3 tbsp vinegar',
      '1 tbsp oil',
      'to taste salt',
      'to taste salt',
      'to taste sugar',
    ],
  },
];
  return (
    <div>


      <div className="bg-white px-6 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl text-teal-800 font-[BrushScriptMT,cursive,Allura] mb-4">
              Allergy Advices
            </h2>
            <p className="uppercase text-gray-500 tracking-wider mb-4">
              AT OUR RESTAURANT
            </p>

            <p className="text-gray-800 text-lg font-medium">
              We use only the freshest and highest quality ingredients in all
              our dishes,
              <span className="text-orange-600 text-xl font-bold mb-2 m-2">
                and offer transparency in our ingredient labeling.
              </span>
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

      <div className="relative bg-white py-20 px-4 md:px-10 overflow-hidden">
   
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-[26px] font-bold">
          <span className="text-orange-600">Ingredient’s</span>{' '}
          <span className="text-gray-800">Used</span>
        </h2>
      </div>

      <div className="flex flex-col gap-10 max-w-3xl mx-auto relative z-10">
        {ingredients.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-6 shadow-[0px_8px_20px_rgba(0,0,0,0.1)] border border-gray-100"
          >
            <h3 className="text-[17px] font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-800 flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⬤</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <img
        src={bg}
        alt="bg-left"
        className="absolute top-24 left-80 w-60 z-0 opacity-60"
      />
      <img
        src={bg1}
        alt="bg-right"
        className="absolute bottom-0 right-60 w-60 z-0 opacity-60"
      />
      <img
        src={bg3}
        alt="spices"
        className="absolute  -bottom-64 left-1/2 transform -translate-x-1/2 -translate-y-[60%] w-[1350px] z-0"
      />
    </div>

    <div className="bg-white py-20 px-4 md:px-10 relative overflow-hidden">
     
      <div className="text-center mb-6 relative z-10">
        <h2 className="text-[26px] font-bold mb-2">
          <span className="text-orange-500">Allergy</span>{' '}
          <span className="text-gray-800">Advice</span>
        </h2>
      </div>

      
      <div className="max-w-4xl mx-auto text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est
          blandit in gravida. Nisl facilisis luctus sit porttitor placerat
          purus tincidunt. Cursus nascetur a rhoncus odio quis sociis pretium
          nisl. In viverra diam dis montes orci congue vulputate magna
          ullamcorper. Semper tellus Ipsum felis maecenas ultrices turpis amet
          euismod malesuada. Amet sed neque vitae malesuada quis sed urna.
        </p>
        <p>
          Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis
          bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est
          ultricies risus et sed. Donec auctor tristique quam morbi
          pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et
          nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor.
          Ipsum massa suspendisse natus mollis interdum.
        </p>
        <p>
          Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec
          dignissim aenean congue justo et. Parturient elit adipiscing non
          vitae mattis. Congue senectus cura mus nisl nisi tincidunt rhoncus.
          Congue sit elit vestibulum elit aenean leo enim velit. Aliquet vitae
          condimentum bibendum ullamcorper vel cursus libero metus bibendum.
          Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc
          morbi leo quisque viverra ultricies. Mattis at tempus ultricies ut
          feugiat nunc dignissim. Urna turpis purus turpis elit risus.
        </p>
        <p>
          Sed sit ornare senectus dignissim diam dolor sed dictum. Faucibus
          mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut
          mus orci neque sem. Mattis amet et amet faucibus nisi morbi aenean
          ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh
          urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor
          cursus fringilla hac facilisis pellentesque. Elementum lacus varius
          et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula
          commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed
          aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant
          et consequat vitae elit aliquet iaculis in tristique.
        </p>
        <p>
          Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie
          arcu nulla convallis interdum proin dui ut porta. Amet potenti
          praesent pulvinar scelerisque vitae habitant eget. Senectus hac id
          aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec
          ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum
          ultricies elementum feugiat erat suspendisse mi fermentum magna
          suspendisse. Nisi mattis consequat nec donec eu amet nulla ac. At
          blandit vulputate morbi tortor amet. Hac nec gravida tempor ac.
          Senectus nunc libero scelerisque quisque. Risus condimentum mattis
          massa integer.
        </p>
      </div>

      
      <div className="mt-16 max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md p-8 text-center relative z-10">
        <h3 className="text-lg font-semibold text-green-600 mb-2">
          Scan the QR code
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          You can also check the allergy advices using your phone as well
        </p>
        <div className="flex justify-center items-center flex-col gap-2">
          <img src={qr} alt="QR Code" className="w-28 h-28" />
          <p className="text-sm font-semibold text-orange-600">SCAN ME!</p>
        </div>
      </div>

  
    </div>

    </div>
  );
}

export default AllergyAdvice;

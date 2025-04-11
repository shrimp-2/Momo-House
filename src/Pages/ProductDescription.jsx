import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";
import { Bounce, toast } from "react-toastify";

function ProductDescription() {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const Navigate = useNavigate();
  let totalPrice = product?.caloriesPerServing * quantity;
  useEffect(() => {
    const getProduct = async () => {
      let response = await fetch(`https://dummyjson.com/recipes/${id}`);
      let data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);

  return (
    <div>
      <div className="pt-16">
        <div className="mt-5">
          <div className="flex  ml-28 gap-x-2">
            <div>
              <img className="h-80" src={product?.image} alt="product_name" />
            </div>
            <div className="py-3 space-y-3 w-[500px]">
              <div>
                <h1 className="text-3xl">{product?.name}</h1>
              </div>
              <div>
                <p className="text-orange-500">Rating {product?.rating}</p>
              </div>
              <div>
                <p className="text-3xl text-amber-500">
                  Rs.{product?.caloriesPerServing}
                </p>
              </div>
              <div>
                <div className="flex">
                  <p>Quantity</p>
                  <div className="ml-7">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="bg-gray-300 h-7 w-7 hover:text-white"
                    >
                      -
                    </button>
                    <span className="inline-block h-7 w-7 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                      className="bg-gray-300 h-7 w-7 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button
                  onClick={() => {
                    Navigate("/payment", {
                      state: {
                        totalPrice: totalPrice,
                      },
                    });

                    toast.success("Ready TO Buy", {
                      position: "top-center",
                      autoClose: 500,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                  }}
                  className="bg-blue-700 text-white w-52 p-3"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "AddToCart", payload: product });

                    toast.success("Added TO Cart", {
                      position: "top-center",
                      autoClose: 500,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                      transition: Bounce,
                    });
                  }}
                  className="bg-orange-700 text-white ml-2 w-52 p-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 px-6 pb-40">
            <h3 className="text-lg font-semibold text-amber-600 mb-2">
              Instruction:
            </h3>
            <p className="text-base text-gray-800 leading-relaxed">
              {product?.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;

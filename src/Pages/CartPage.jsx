import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import {  NavLink, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function CartPage() {
  const { state, dispatch } = useContext(CartContext);

  const navigate = useNavigate();
 
  console.log(state.items);

  let totalPrice = state.items.reduce((acc, product) => {
    return acc + product.qty * product.caloriesPerServing;
  }, 0);

  let totalItem = state.items.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);

  let shippingFee = totalItem * 5;

  return (
    <div className=" pt-16">
      <div>
        {state.items.length > 0 ? (
          <div className="flex  gap-3">
            <div className=" bg-gray-50  w-[900px] space-y-5 p-7 ">
              {state.items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" flex   justify-around  bg-white  shadow-2xl shadow-gray-200 rounded-2xl    "
                  >
                    <div>
                      <img
                        className="h-28  rounded-2xl"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="  w-96 p-3 ">
                      <h1 className="font-Roboto text-xl">{item.name}</h1>
                    </div>
                    <div className="   w-32 p-3  text-2xl   ">
                      <h1 className="text-orange-800">
                        Rs.{item.caloriesPerServing}
                      </h1>
                      <button
                        onClick={() => {
                          dispatch({ type: "RemoveCart", payload: item.id });
                          toast.warn('Item is deleted', {
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
                      >
                        <RiDeleteBin6Line 
                        />
                        
                      </button>
                    </div>
                    <div className=" w-32  p-3 ">
                      <button
                        onClick={() => {
                          dispatch({ type: "Decrement", payload: item.id });
                        }}
                        className="bg-gray-300  h-7 w-7  hover:text-white "
                      >
                        -
                      </button>
                      <span className="inline-block  h-7 w-7  text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => {
                          dispatch({ type: "Increment", payload: item.id });
                        }}
                        className="bg-gray-300   h-7 w-7  hover:text-white "
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="  w-80 h-96 flex flex-col  shadow-2xl  shadow-gray-500 rounded-2xl mt-5 gap-y-6 p-10  ">
              <h1 className="text-2xl"> Order Summary</h1>
              <p>Subtotal:Rs.{totalPrice}</p>
              <p>Shipping Fee: Rs. {shippingFee} </p>
              <button 
              onClick={()=>{
                navigate("/payment",{
                  state:{
                    totalPrice:totalPrice,
                  }
                })

                toast.success('Proceed to check out', {
                  position: "top-center",
                  autoClose: 500,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Bounce,
                  });
              }}
              className="bg-orange-700  p-3 rounded-sm  text-white">
                Proceed to Checkout ({totalItem})
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "ClearCart" });
                  toast.error('cart is cleared', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
                }}
                className="bg-red-600  p-3 rounded-sm  text-white"
              >
                clear cart
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center justify-center h-[60vh] text-center gap-6">
            <img
                src="https://th.bing.com/th/id/OIP.1kewjaodTum0I0se0C800gHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Empty Cart"
                className="w-40 h-40 object-contain rounded-lg shadow-md"
              />
              <h1 className="text-3xl font-bold text-gray-700">
                Your Cart is Empty
              </h1>
              <p className="text-gray-500">
                Looks like you haven't added anything yet.
              </p>
              <NavLink
                to="/menu"
                className="bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;

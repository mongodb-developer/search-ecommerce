import React, { useState } from "react";
import OutStock from "../images/OutStock.png";

const Cart = ({
  cartItems,
  setShowCart,
  currentCustID,
  setShowReplacements,
}) => {
  let TotalPrice = 0;

  for (let i = 0; i < cartItems?.length; i++) {
    TotalPrice = TotalPrice + cartItems[i].price;
  }

  const [showOutStock, setShowOutStock] = useState(false);

  function lostCart() {
    setShowOutStock(true);
    TotalPrice = TotalPrice - 30;
  }

  function showReplacementSuggestions() {
    if (currentCustID === "63229e0ae634e04e58252a71") setShowReplacements(true);
  }

  setTimeout(lostCart, 3000);
  setTimeout(showReplacementSuggestions, 5000);

  return (
    <div className=" text-xl text-white bg-gradient-to-t bg-slate-800 p-8 z-20 rounded-lg">
      <div className="flex mx-auto space-x-8 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-16 h-16 mb-4 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>

      <div className="bg-white py-8  mx-auto rounded px-8 text-black text-sm text-center">
        {cartItems?.map((item, idx) => (
          <div className="relative" key={idx}>
            <div className="mt-4  text-indigo-900">{item.name}</div>
            <img
              src={item.main_image_url}
              alt={item.name}
              className="object-scale-down h-32 w-32 "
            />
            <div className="text-gray-500 mt-2">${item.price}</div>
            <div className=" flex rounded-full w-20 p-2 border border-slate-800 mb-4 space-x-4 text-center items-center absolute bottom-0 right-0">
              <div className="pl-2">1</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>

            {showOutStock && item.name === "Petzl Swift RL Headlamp" && (
              <img
                src={OutStock}
                alt="empty"
                className="absolute  w-96 top-16 rounded-lg my-auto mx-auto -skew-y-12 "
              />
            )}

            <hr></hr>
          </div>
        ))}
      </div>
      <div className="bg-slate-800 text-white w-full py-2 text-center ">
        ORDER SUMMARY
      </div>
      <div className="bg-slate-800 text-white w-full py-2 text-center ">
        ${TotalPrice}
      </div>
      <button
        type="button"
        className="py-3 px-8 bg-green-700 text-white font-bold rounded-full w-full mt-8"
        onClick={() => {
          setShowCart(false);
        }}
      >
        BUY NOW
      </button>
      <div
        className="absolute bottom-2 right-2"
        onClick={() => {
          setShowCart(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Cart;

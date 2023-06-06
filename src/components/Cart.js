import React from "react";

const Cart = ({ setShowCart }) => {
  return (
    <div className="absolute top-20 right-20 text-xl text-white bg-gradient-to-t from-gray-900 to-gray-600 p-8 z-20 rounded-lg">
      CART
      <div className="bg-white py-8  mx-auto rounded px-8">
        <button
          type="button"
          className="py-3 px-8 bg-green-500 text-white font-bold rounded w-full mt-8"
          onClick={() => {
            setShowCart(false);
          }}
        >
          PURCHASE
        </button>
      </div>
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

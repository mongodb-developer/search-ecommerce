import React from "react";
import LearnMore from "../images/LearnMore.png";
import Needed from "../images/Needed.png";

const ChatProducts = ({ suggestions, setShowChatProducts }) => {
  return (
    <div className="relative bg-white text-xl border border-slate-700  p-2 z-20 rounded-lg mt-20 w-full">
      <img src={Needed} alt="needed" className="mx-auto" />
      <div className="grid gap-6 grid-cols-3 px-4 pb-6 pt-2 ">
        {suggestions.map((item, idx) => (
          <div
            className="relative bg-white p-4 text-center shadow-2xl rounded "
            key={item.idx}
          >
            <div className="mt-4  text-indigo-900">{item.name}</div>
            <img
              src={item.main_image_url}
              alt={item.name}
              className="object-scale-down h-16 w-full"
            />
            <div className="text-gray-500 mt-2">${item.price}</div>

            <hr></hr>
            <img src={LearnMore} alt="info" className="w-1/2 mx-auto" />
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-2 right-2"
        onClick={() => {
          setShowChatProducts(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
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

export default ChatProducts;

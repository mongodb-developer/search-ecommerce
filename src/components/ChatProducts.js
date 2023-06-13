import React from "react";

const ChatProducts = ({ suggestions, setShowChatProducts }) => {
  return (
    <div className="relative bg-slate-800 text-xl  bg-gradient-to-t border-slate-800 border-8 p-2 z-20 rounded-lg mt-20 w-96">
      <div className=" py-8  mx-auto rounded text-white text-center flex flex-col-reverse">
        {suggestions.map((item) => (
          <div className="relative bg-white" key={item.idx}>
            <div className="mt-4  text-indigo-900">{item.name}</div>
            <img
              src={item.main_image_url}
              alt={item.name}
              className="object-scale-down h-16 w-full"
            />
            <div className="text-gray-500 mt-2">${item.price}</div>
            <div className="w-5/6 mt-2  text-black p-2 border-t border-green-600 text-center mx-auto mb-10">
              Check it out!
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
      <div
        className="absolute top-2 right-2"
        onClick={() => {
          setShowChatProducts(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
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

import React from "react";

const ChatSuggestedItem = ({ product, idx }) => {
  return (
    <div className=" flex flex-col p-2 rounded bg-white w-36 h-36  text-sm  overflow-auto border border-green-800 items-center">
      <div className="flex items-center ">
        <img
          src={product.main_image_url}
          alt={"item"}
          className="object-scale-down h-24"
        />
        <div className="text-gray-500 mt-2">${product.price}</div>
      </div>

      <div className="flex-flex-col w-full text-center">
        {" "}
        <div className="mt-4  text-black">{product.name}</div>
      </div>
    </div>
  );
};

export default ChatSuggestedItem;

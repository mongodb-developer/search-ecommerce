import React from "react";
import ChatSuggestedItem from "./ChatSuggestedItem";
import SeeMore from "../images/SeeMore.png";

const ChatPeekProducts = ({
  setShowChatProducts,
  suggestions,
  setSuggestions,
}) => {
  setSuggestions(suggestions);
  console.log("SUGGESTIONS: ", suggestions);
  return (
    <div className="shadow-2xl bg-gradient-to-l from-black to-black w-full p-4  flex  my-4 rounded-lg ">
      <div className="w-1/2 flex">
        {suggestions.slice(0, 2).map((item, idx) => (
          <div className="ml-4">
            <ChatSuggestedItem product={item} />
          </div>
        ))}
      </div>
      <div className="w-1/3 ml-auto my-auto ">
        <img
          src={SeeMore}
          alt="more"
          className="hover:scale-110 cursor-pointer w-48 object-scale-down transition duration-300 ease-in-out"
          onClick={() => setShowChatProducts(true)}
        />
      </div>
    </div>
  );
};

export default ChatPeekProducts;

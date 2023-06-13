import React, { useState } from "react";
import AskAnything from "../images/AskAnything.png";

import ChatIcon from "../images/ChatIcon.png";
import { Collapse } from "react-collapse";
import Chatbot from "./Chatbot";
import ChatProducts from "./ChatProducts";

const ChatSection = ({ showChat, setShowChat }) => {
  const toggleChat = (showChat) => {
    setShowChat(!showChat);
  };

  const [showChatProducts, setShowChatProducts] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className="flex w-full ml-auto max-h-screen ">
      {showChatProducts && (
        <div className="absolute bottom-0 left-20 w-1/2 mx-auto ">
          {" "}
          <ChatProducts
            setShowChatProducts={setShowChatProducts}
            suggestions={suggestions}
          />
        </div>
      )}
      <div
        className={
          showChat
            ? "bg-white flex object-right z-auto rounded px-4 w-1/3 ml-auto   flex-col justify-end overflow-y-auto"
            : "flex flex-col w-1/3 ml-auto object-right z-auto rounded px-4  "
        }
      >
        <div className="relative flex justify-center overflow-y-auto">
          <div className={!showChat ? "ml-auto" : "mx-auto"}>
            <img
              src={AskAnything}
              alt="ChatInvite"
              className="object-contain w-96 top-16 rounded-md my-auto mx-auto cursor-pointer"
            />
            {!showChat && (
              <img
                src={ChatIcon}
                alt="ChatIcon"
                onClick={() => toggleChat(showChat)}
                className=" object-contain w-96 top-16 rounded-md my-auto mx-auto transition-transform duration-500 cursor-pointer hover:scale-110"
              />
            )}
          </div>
        </div>
        <Collapse isOpened={showChat}>
          <div className="flex justify-center transition-all ease-in-out delay-150 duration-500 mb-6 overflow-y-auto ">
            <Chatbot
              showChat={showChat}
              setShowChat={setShowChat}
              setShowChatProducts={setShowChatProducts}
              setSuggestions={setSuggestions}
            />
          </div>
        </Collapse>{" "}
        {showChat && (
          <div
            className="absolute bottom-0 right-1 text-3xl text-black cursor-pointer transition-transform duration-500"
            onClick={() => toggleChat(showChat)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSection;

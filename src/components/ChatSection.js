import React, { useState } from "react";
import AskAnything from "../images/AskAnything.png";
import ChatBar from "../images/ChatBar.png";
import ChatIcon from "../images/ChatIcon.png";
import { Collapse } from "react-collapse";
import Chatbot from "./Chatbot";

const ChatSection = () => {
  const [showChat, setShowChat] = useState(false);
  const toggleChat = (showChat) => {
    setShowChat(!showChat);
  };
  return (
    <div className=" flex flex-col w-full object-right z-auto ">
      <div className="relative flex justify-center">
        <div className="ml-auto">
          <img
            src={AskAnything}
            alt="ChatInvite"
            className="bg-white object-contain w-96 top-16 rounded-md my-auto mx-auto cursor-pointer"
          />
          {showChat ? (
            <div
              className="absolute bottom-0 right-4 text-3xl text-black cursor-pointer transition-transform duration-500"
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
          ) : (
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
        <div className="flex justify-center transition-all ease-in-out delay-150 duration-500">
          <Chatbot />
        </div>
      </Collapse>{" "}
    </div>
  );
};

export default ChatSection;

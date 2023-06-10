import React, { useState } from "react";
import AskUsAnything from "../images/AskUsAnything.png";
import { Collapse } from "react-collapse";
import Chatbot from "./Chatbot";

const ChatSection = () => {
  const [showChat, setShowChat] = useState(true);
  const toggleChat = (showChat) => {
    setShowChat(!showChat);
  };
  return (
    <div className=" flex flex-col w-96 object-right z-auto">
      <div className="relative flex justify-center">
        <div onClick={() => toggleChat(showChat)}>
          <img
            src={AskUsAnything}
            alt="ChatInvite"
            className="object-contain w-96 top-16 rounded-md my-auto mx-auto cursor-pointer hover:shadow-2xl"
          />

          <div className="absolute bottom-4 right-4 text-3xl text-black cursor-pointer transition-transform duration-500">
            {showChat ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </div>
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

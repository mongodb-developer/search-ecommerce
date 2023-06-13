import React, { useState, useEffect } from "react";
import { Configuration } from "openai";

import Loading from "../images/Loading.gif";
import PeekingDuck from "../images/PeekingDuck.png";
import thinking from "../images/thinking.png";

const PARAMS = {
  temperature: 0,
  max_tokens: 256,
};
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
});

const Question = ({ text }) => {
  return (
    <div className=" w-2/3 ml-auto mt-4 rounded-lg py-2 px-4 border bg-green-600 text-white text-right">
      {text}
    </div>
  );
};

const Response = ({ textArray }) => {
  return (
    <div className="bg-red-600 py-2 px-4 rounded-lg mt-4 text-white text-lg">
      {textArray.map((text) => (
        <div className="my-4">{text}</div>
      ))}
    </div>
  );
};

const Chatbot = ({
  showChat,
  setShowChat,
  setShowChatProducts,
  setSuggestions,
}) => {
  const [userInput, setUserInput] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [responseList, setResponseList] = useState([]);

  const updateResponseList = (idx) => {
    if (messageExchange[idx]) {
      let answer = messageExchange[idx]["answer"];

      setResponseList((responseList) => [...responseList, answer]);
    }
  };

  useEffect(() => {
    let marker = questionList.length - 1;
    const timeout = setTimeout(() => {
      updateResponseList(marker);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };

    // eslint-disable-next-line
  }, [questionList]);

  useEffect(() => {
    if (showChat) return;
    setQuestionList([]);
    setResponseList([]);

    // eslint-disable-next-line
  }, [showChat]);

  const handleStartChat = async (e) => {
    e.preventDefault();
    console.log("CHATTING");

    setQuestionList((questionList) => [...questionList, userInput]);

    setUserInput("");
  };
  //  <div className="fixed inset-0 z-20 p-20 flex justify-center bg-smoke-dark">

  // "w-full mb-4 max-h-128 "
  return (
    <div className="w-full mb-4 max-h-128 flex flex-col overflow-y-auto">
      {questionList.length > 0 &&
        questionList.map((question, idx) => (
          <div key={idx}>
            <Question text={question} />
            {responseList[idx] ? (
              <>
                <Response textArray={responseList[idx]} />
                <img
                  src={PeekingDuck}
                  alt="box"
                  className="w-36 object-scale-down bg-yellow-300 rounded-lg my-4 mx-auto p-1 hover:scale-110 hover:bg-yellow-400 transition-transform duration-150"
                  onClick={() => {
                    setSuggestions(messageExchange[idx]["productSuggestions"]);
                    setShowChatProducts(true);
                    console.log(
                      "SUGGESTIONS: ",
                      messageExchange[idx]["productSuggestions"]
                    );
                  }}
                />
              </>
            ) : (
              <div className="flex w-1/4 mx-auto content-end">
                <img
                  src={Loading}
                  alt="loading"
                  className="object-scale-down h-32 w-full my-auto"
                />
                <img
                  src={thinking}
                  alt="thinking"
                  className="flex object-scale-down h-12 w-full mt-auto "
                />
              </div>
            )}
          </div>
        ))}

      <form onSubmit={handleStartChat}>
        <input
          className="w-full border-4 rounded-md mt-4 pl-10 pr-4 py-2 focus:border-green-600 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter your message"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
      </form>
    </div>
  );
};

const messageExchange = [
  {
    index: 0,
    question: "What should I wear hiking if it's really hot?",
    answer: [
      `Great question! If it's hot outside, you'll want to wear lightweight 
  and breathable clothing that will help keep you cool and comfortable on your hike.`,
      `Some good options might include shorts, sportswear t-shirts, or tank tops, and 
  moisture-wicking socks. You'll also want comfortable and supportive hiking s
  hoes or boots to protect your feet on rough terrain. Be sure to bring a hat and sunglasses 
  to protect your face and eyes from the sun, and don't forget to apply sunscreen before you hit the trail!`,

      `Here is a list of some practical in-stock items you can check out:
`,
    ],
    productSuggestions: [],
  },
  {
    index: 1,
    question: `It might be raining too`,
    answer: [
      `Both hot and rainy can be a little tricky. You'll want to 
  make sure that you are covered up and dry in case it starts to rain, but that your clothes are 
  also breathable enough to allow sweat to escape so you don't overheat:`,

      `Wear lightweight, quick-drying fabrics such as polyester or nylon.`,
      `A rain jacket or poncho will help keep you dry.`,
      `A hat with a brim can a keep the sun and rain out of your face.`,
      `Waterproof or water-resistant footwear with
 good traction is key, especially if you will be walking on slippery or muddy terrain.`,
      `Finally, pack extra dry clothing in your 
 backpack in case you need to change into something warmer and dry during a break.`,

      ` Maybe try these:`,
    ],
    productSuggestions: [
      {
        name: "Outdoor ResearchHelium Rain",
        main_image_url:
          "https://www.rei.com/media/2c2ce22c-0b60-4b24-8b72-3e11dc77532d.jpg",
        price: 159,
      },
      {
        name: "Tilley LTM6 Airflo Broad Brim Hat",
        main_image_url:
          "https://www.rei.com/media/1b3d77cd-a778-494a-8856-2ac7f0a96ed5.jpg?size=576x768",
        price: 99,
      },
      {
        name: "Tilley LTM6 Airflo Broad Brim Hat",
        main_image_url:
          "https://www.rei.com/media/1b3d77cd-a778-494a-8856-2ac7f0a96ed5.jpg?size=576x768",
        price: 99,
      },
      {
        name: "Outdoor ResearchHelium Rain",
        main_image_url:
          "https://www.rei.com/media/2c2ce22c-0b60-4b24-8b72-3e11dc77532d.jpg",
        price: 159,
      },
      {
        name: "Tilley LTM6 Airflo Broad Brim Hat",
        main_image_url:
          "https://www.rei.com/media/1b3d77cd-a778-494a-8856-2ac7f0a96ed5.jpg?size=576x768",
        price: 99,
      },
      {
        name: "Tilley LTM6 Airflo Broad Brim Hat",
        main_image_url:
          "https://www.rei.com/media/1b3d77cd-a778-494a-8856-2ac7f0a96ed5.jpg?size=576x768",
        price: 99,
      },
    ],
  },
];

export default Chatbot;

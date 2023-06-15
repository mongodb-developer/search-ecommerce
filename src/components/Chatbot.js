import React, { useState, useEffect } from "react";
import { Configuration } from "openai";
import ChatPeekProducts from "./ChatPeekProducts";

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

  return (
    <div className="w-full mb-4 flex flex-col overflow-y-auto max-h-screen">
      {questionList.length > 0 &&
        questionList.map((question, idx) => (
          <div key={idx}>
            <Question text={question} />
            {responseList[idx] ? (
              <>
                <Response textArray={responseList[idx]} />
                <ChatPeekProducts
                  setShowChatProducts={setShowChatProducts}
                  setSuggestions={setSuggestions}
                  suggestions={messageExchange[idx]["productSuggestions"]}
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
    productSuggestions: [
      {
        name: " Stretch Zion Hiking Shorts",
        main_image_url:
          "https://www.rei.com/media/38275c4e-9398-4469-8bd0-5b87c14b8823.jpg?size=576x768",
        price: 75,
      },
      {
        name: "Parallel Polarized Sunglasses",
        main_image_url:
          "https://www.rei.com/media/8642548f-9e7f-4393-b7f2-5e4f3ef721c2.jpg",
        price: 149,
      },

      {
        name: "Sun Protective Shirt",
        main_image_url:
          "https://www.rei.com/media/3bac8270-75a0-4d37-9b1c-dce3dccf53d6.jpg?size=576x768",
        price: 110,
      },
      {
        name: "Sun Sleeves",
        main_image_url:
          "https://www.rei.com/media/ceeb4f27-7303-4387-81be-0affa9011c0a.jpg?size=784x588",
        price: 35,
      },
      {
        name: "Buff EcoStretch Neckwear",
        main_image_url:
          "https://www.rei.com/media/dee50667-6965-4ff2-bb97-d1e1ecd71ff5.jpg?size=576x768",
        price: 38,
      },
      {
        name: "Thinksport Zinc Sunscreen",
        main_image_url:
          "https://www.rei.com/media/63a81eaf-ded6-4942-a203-c6ee6a103879.jpg?size=784x588",
        price: 15,
      },
    ],
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
        name: "Cielo Rain Anorack",
        main_image_url:
          "https://www.rei.com/media/2790d69a-9bbc-4290-9e98-ad531a3ce842.jpg?size=576x768",
        price: 155,
      },
      {
        name: "Rolltop Rucksack",
        main_image_url:
          "https://www.rei.com/media/cdd8bebf-abcc-422a-8dde-645f4646927a.jpg?size=784x588",
        price: 125,
      },
      {
        name: "Tilley LTM6 Airflo Broad Brim Hat",
        main_image_url:
          "https://www.rei.com/media/1b3d77cd-a778-494a-8856-2ac7f0a96ed5.jpg?size=576x768",
        price: 99,
      },

      {
        name: "Rains Pants Regular",
        main_image_url:
          "https://www.rei.com/media/2962c5eb-4b23-4644-ae15-b48636ca59a3.jpg?size=576x768",
        price: 95,
      },
      {
        name: "Cape",
        main_image_url:
          "https://cdn.shopify.com/s/files/1/0310/5600/3204/products/RP1_NAV_1000x.jpg?v=1585232107",
        price: 125,
      },
      {
        name: "Ducks' Back Rain Cover",
        main_image_url:
          "https://www.rei.com/media/03d857d4-f63d-4855-9ab6-feb9eb4ec42e.jpg?size=784x588",
        price: 29,
      },
    ],
  },
];

export default Chatbot;

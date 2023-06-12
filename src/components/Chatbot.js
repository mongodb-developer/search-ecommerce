import React, { useState, useEffect } from "react";
import { Configuration } from "openai";
import Typewriter from "typewriter-effect";

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

const Response = ({ text }) => {
  return (
    <div className=" mt-4 rounded-lg py-2 px-4 border bg-red-600 text-white">
      {text}
    </div>
  );
};

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [responseList, setResponseList] = useState([]);
  const [index, setIndex] = useState(0);

  const updateResponseList = (idx) => {
    if (messageExchange[idx]) {
      let answer = messageExchange[idx]["answer"];

      console.log("ANSWERING");
      console.log(answer);
      setResponseList((responseList) => [...responseList, answer]);
    }
    console.log("RESPONSES: ", responseList);
  };

  // Set Time out
  useEffect(() => {
    console.log("UPDATING RESPONSE: ", questionList.length - 1);
    let marker = questionList.length - 1;
    updateResponseList(marker);
    return;

    // eslint-disable-next-line
  }, [questionList]);

  const handleStartChat = async (e) => {
    e.preventDefault();
    console.log("CHATTING");

    setQuestionList((questionList) => [...questionList, userInput]);

    console.log("QUESTIONS", questionList);
    // setIndex(index + 1);
    console.log("INDEX", index);

    setUserInput("");
  };

  return (
    <div className="w-full mb-4 max-h-128 ">
      {questionList.length > 0 &&
        questionList.map((question, idx) => (
          <>
            <Question text={question} />
            {responseList[idx] && <Response text={responseList[idx]} />}
          </>
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
    answer: `Great question! If it's hot outside, you'll want to wear lightweight 
  and breathable clothing that will help keep you cool and comfortable on your hike. 
  Some good options might include shorts, sportswear t-shirts, or tank tops, and 
  moisture-wicking socks. You'll also want to wear comfortable and supportive hiking s
  hoes or boots to protect your feet on rough terrain. Be sure to bring a hat and sunglasses 
  to protect your face and eyes from the sun, and don't forget to apply sunscreen before you hit the trail!

Here is a list of some practical in-stock items you can check out:
`,
    productSuggestions: [],
  },
  {
    index: 1,
    question: `It might be raining too`,
    answer: `If it's both hot and rainy, it can be a little tricky. You'll want to 
  make sure that you are covered up enough to stay warm and dry in case it starts to rain, but that your clothes are 
  also breathable enough to allow sweat to escape so you don't overheat.

  A good option is to wear lightweight, quick-drying fabrics such as polyester or nylon:/n 
  A rain jacket or poncho will help keep you dry.
   a hat with a brim can a keep rain out of your face.Choose footwear that is waterproof or water-resistant 
 and has good traction, especially if you will be walking on slippery or muddy terrain. Finally, pack extra dry clothing in your 
 backpack in case you need to change into something warmer and dry during a break.

 Maybe try these:
`,
    productSuggestions: [],
  },
];

export default Chatbot;

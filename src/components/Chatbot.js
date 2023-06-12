import React, { useState } from "react";
import { Configuration } from "openai";
import Typewriter from "typewriter-effect";

const PARAMS = {
  temperature: 0,
  max_tokens: 256,
};
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
});

const Chatbot = () => {
  const [chatResponse, setChatResponse] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userStatement, setUserStatement] = useState("");
  const [question, setQuestion] = useState(0);

  const handleStartHikeChat = (e) => {
    e.preventDefault();
    setUserStatement(userInput);
    if (question === 0) {
      setChatResponse(HikingHotExample.answer);
      setQuestion(1);
    }
    if (question === 1) {
      setChatResponse(HikingRainHotExample.answer);
      setQuestion(0);
    }
    setUserInput("");
  };

  const handleSendData = async (e) => {
    e.preventDefault();
    console.log("Form is submitted");
    const prompt = getInstructions(userInput);
    setUserStatement(userInput);
    setUserInput("");

    const endpoint =
      "https://api.openai.com/v1/engines/text-davinci-003/completions";
    const body = { ...PARAMS, prompt };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${configuration.apiKey}`,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    console.log("DATA", data);
    setChatResponse(data.choices[0]["text"]);
  };

  const getInstructions = (input) => {
    let prompt = input;
    return prompt;
  };

  return (
    <div className="w-96 mb-20 ">
      {userStatement !== "" && (
        <div className="w-full flex">
          <div className="w-1/3"> </div>
          <div className=" w-2/3 mt-4 rounded-lg py-2 px-4 border bg-green-600 text-white text-right">
            {userStatement}
          </div>
        </div>
      )}
      {chatResponse !== "" && (
        <div className="w-full flex">
          <div className=" mt-4 rounded-lg py-2 px-4 border bg-red-600 text-white">
            {chatResponse}
          </div>
        </div>
      )}
      <form onSubmit={handleStartHikeChat}>
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

export default Chatbot;

const HikingHotExample = {
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
};

const HikingRainHotExample = {
  question: `It might be raining too`,
  answer: `If it's both hot and rainy, it can be a little tricky to decide what to wear on your hike. You'll want to 
  make sure that you are covered up enough to stay warm and dry in case it starts to rain, but that your clothes are 
  also breathable enough to allow sweat to escape so you don't overheat.

  A good option is to wear lightweight, quick-drying fabrics such as polyester or nylon. A rain jacket or poncho will help
 keep you dry, and a hat with a brim can also help keep rain out of your face. Choose footwear that is waterproof or water-resistant 
 and has good traction, especially if you will be walking on slippery or muddy terrain. Finally, pack extra dry clothing in your 
 backpack in case you need to change into something warmer and dry during a break.

 Maybe try these:
`,
  productSuggestions: [],
};

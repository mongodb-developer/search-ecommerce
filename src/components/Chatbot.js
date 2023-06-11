import React, { useState } from "react";
import { Configuration } from "openai";

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
          <div className=" w-2/3 mt-4 rounded-lg py-2 px-4 border bg-green-500 text-white text-right">
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
      <form onSubmit={handleSendData}>
        <input
          className="w-full border rounded-md mt-4 pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline"
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

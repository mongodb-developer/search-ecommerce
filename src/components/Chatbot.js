import React, { useState } from "react";
import { Configuration } from "openai";

const PARAMS = {
  temperature: 0,
  max_tokens: 256,
};
// sk - i02cpaG8AkOlchBKHnjET3BlbkFJXChtBiKTzsr1SFtDW5Dc;
const configuration = new Configuration({
  apiKey: "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",
  // apiKey: process.env.REACT_APP_OPENAI_KEY,
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
    <div className="w-96 h-96 ">
      {userStatement !== "" && (
        <div className=" mt-4 rounded-2xl py-2 px-4 border bg-indigo-600 text-white text-right">
          {userStatement}
        </div>
      )}
      {chatResponse !== "" && (
        <div className="  mt-4 rounded-2xl py-2 px-4 border bg-red-600 text-white">
          {chatResponse}
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

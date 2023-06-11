import React from "react";

const Replacements = ({ setShowReplacements, currentCustID }) => {
  let suggestions = [];
  if (currentCustID === "63229e0ae634e04e58252a74") {
    suggestions = suggestionsAmalea;
  } else suggestions = suggestionsScott;
  return (
    <div className="relative bg-white text-xl  bg-gradient-to-t border-slate-800 border-8 p-2 z-20 rounded-lg mt-20 w-64">
      <div className=" text-lg text-red-800 text-center pt-4">
        Aww. 😞 Your item has just gone out of stock. We recommend the following
        as replacements:
      </div>
      <div className=" py-8  mx-auto rounded text-black text-sm text-center">
        {suggestions.map((item) => (
          <div className="relative" key={item.idx}>
            <div className="mt-4  text-indigo-900">{item.name}</div>
            <img
              src={item.main_image_url}
              alt={item.name}
              className="object-scale-down h-16 w-full"
            />
            <div className="text-gray-500 mt-2">${item.price}</div>
            <div className="rounded-full w-20 p-2 border border-green-800 text-center mx-auto mb-10">
              ADD
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
      <div
        className="absolute top-2 right-2"
        onClick={() => {
          setShowReplacements(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Replacements;

const suggestionsAmalea = [
  {
    idx: 0,
    name: "fresh Freesia Oval Soap",
    price: 16,
    main_image_url:
      "https://www.sephora.com/productimages/sku/s1044478-main-zoom.jpg?imwidth=612",
  },
  {
    idx: 1,
    name: "Moroccanoil Moroccanoil Body™ Soap",
    price: 14,
    main_image_url:
      "https://www.sephora.com/productimages/sku/s2135606-main-zoom.jpg?imwidth=612",
  },
  {
    idx: 2,
    name: "L'Occitane Shea Butter Rich Body Lotion",
    price: 36,
    main_image_url:
      "https://www.sephora.com/productimages/sku/s2019008-main-zoom.jpg?imwidth=612",
  },
];

const suggestionsScott = [
  {
    name: "Petzl IKO Core Headlamp",
    price: 92,
    main_image_url:
      "https://www.rei.com/media/76396725-657a-4cf6-b029-c905e963ac8c.jpg?size=784x588",
  },
  {
    name: "Coast FL1R Micro Headlamp",
    price: 35,
    main_image_url:
      "https://www.rei.com/media/871e79b4-51a0-43d0-b2f2-e2dd9d5478a7?size=2000",
  },
  {
    name: "Coast G22 Flashlight",
    price: 12,
    main_image_url:
      "https://www.rei.com/media/7eeb9484-96d2-46d6-aae3-402dc7927aa4.jpg?size=784x588",
  },
];

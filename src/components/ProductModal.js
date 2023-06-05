import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import DataFlow from "../images/MongoStoreGif.gif";

import Recommended from "../components/Recommended";

const ProductModal = ({
  setShowProductModal,
  showProductModal,
  setDisplayedProduct,
  displayedProduct,
  setViewedProduct,
  customer,
  setShowSuggestions,
  moreLikeThis,
}) => {
  console.log("HIGHLIGHTS: ", displayedProduct.highlights);
  const descriptionWithHighlights = buildHighlightString(
    displayedProduct?.highlights
  );

  return (
    <div className="fixed inset-0 z-20 p-20 flex justify-center bg-smoke-dark">
      <div className="relative flex flex-col w-3/4 h-3/4 bg-white border-2 border-black rounded mt-30 p-8">
        <div className="flex">
          <div className="w-1/2 px-10 text-center">
            <div className="text-gray-900 text-sm uppercase ">
              {displayedProduct.name}
            </div>
            <div className="text-gray-500 mt-2">${displayedProduct.price}</div>
            <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
              <div className="flex flex-col w-full h-36 bg-cover">
                <img
                  src={displayedProduct.image}
                  alt={displayedProduct.name}
                  className="object-scale-down h-36 w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="w-96 h-auto p-1 bg-slate-600 rounded-lg mx-auto"
              src={DataFlow}
              alt="architecture"
            />
          </div>
        </div>

        <div
          className="mt-1 overflow-auto"
          dangerouslySetInnerHTML={{ __html: descriptionWithHighlights }}
        ></div>
        {/* {moreLikeThis.length !== 0 && (
          <Recommended
            recentProducts={moreLikeThis}
            showProductModal={showProductModal}
            setShowProductModal={setShowProductModal}
            setDisplayedProduct={setDisplayedProduct}
            setViewedProduct={setViewedProduct}
            setShowSuggestions={setShowSuggestions}
            customer={customer}
          />
        )} */}

        <ShoppingCartIcon
          className="h-8 w-8 p-1 absolute bottom-0 left-0 ml-3 mb-3 text-white bg-green-600 hover:bg-green-500 rounded-full"
          onClick={() => "setIsCartOpen(!isCartOpen)"}
        />
        <div
          className="absolute bottom-0 right-0 ml-3 mb-3"
          onClick={() => {
            setShowProductModal(false);
            setViewedProduct(true);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="#ff0000"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

function buildHighlightString(highlights) {
  let highlightString = "";

  highlights?.forEach((highlight) => {
    console.log(highlight?.texts);
    let texts = highlight?.texts;
    texts.forEach((text) => {
      if (text?.type === "hit")
        highlightString += `<span style="color:red; font-weight:bold;"> ${text?.value} </span>`;
      else highlightString += text?.value;
    });
  });

  return highlightString;
}

export default ProductModal;

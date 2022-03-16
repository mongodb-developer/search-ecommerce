import React from "react";

const ProductDescription = ({
  title,
  highlights,
  description,
  image,
  price,
  category,
  setShowDescription,
}) => {
  let highlightedStringsArray = [];
  if (highlights?.length > 0) {
    for (
      let j = 0;
      j < highlights.length;
      j++ // this is the number of phrases-menu items
    ) {
      let highlightedString = "";
      for (let k = 0; k < highlights[j].texts.length; k++) {
        highlightedString += highlights[j].texts[k].value;
      }
      highlightedStringsArray.push(highlightedString);
    }
  }
  return (
    <div className="fixed inset-0 z-20 flex justify-center bg-smoke-dark">
      <div className="relative flex flex-col w-2/3 bg-white border border-black rounded h-2/3 mt-40 p-8">
        <div className="p-4 mb-4 text-4xl font-bold text-center text-tolopea-500 font-body">
          {title}
        </div>

        <div className="flex justify-around py-4 pl-2 pr-4">
          <img src={image} alt={title} className="z-0 w-1/4" />
          <div className="flex flex-col ml-6 text-2xl font-body">
            {description ? (
              description.map((item, idx) => {
                if (!highlightedStringsArray.includes(item))
                  return <div key={idx}>{item}</div>;
                else {
                  let highlightedIndex = highlightedStringsArray.indexOf(item);
                  let highlightedString = `<span className="flex flex-row">`;
                  for (
                    let k = 0;
                    k < highlights[highlightedIndex].texts.length;
                    k++
                  ) {
                    if (highlights[highlightedIndex].texts[k].type === "hit") {
                      highlightedString += `<span style="background-color: #FFFF00">${highlights[highlightedIndex].texts[k].value} </span>`;
                    } else
                      highlightedString += `<span>${highlights[highlightedIndex].texts[k].value} </span>`;
                  }
                  highlightedString += "</span>";

                  return (
                    <div
                      dangerouslySetInnerHTML={{ __html: highlightedString }}
                    ></div>
                  );
                }
              })
            ) : (
              <div>There is no product description.</div>
            )}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setShowDescription(false);
            }}
            className="absolute w-10 h-10 mt-10 text-red-700 bottom-8 right-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="pl-12">
          {category && <div className="text-3xl">Category: {category}</div>}
          <div className="text-3xl text-green-700">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

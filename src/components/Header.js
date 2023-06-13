import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";

const Header = ({
  searchTerm,
  setSearchTerm,
  setShowUser,
  showSuggestions,
  setShowSuggestions,
  setSubmitted,
  setDisplayedProduct,
  showProductModal,
  setShowProductModal,
  customer,
  showLogin,
  setShowLogin,
  currentCustID,
  setCurrentCustID,
  showCart,
  setShowCart,
  setShowReplacements,
  showChat,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [autoComplete, setAutoComplete] = useState([]);

  const initial = useRef(true);

  const Suggestions_AC_Endpoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/mongostore-elxkl/endpoint/names";

  const VIEW_PAGE_EVENT_ENDPOINT =
    "https://us-east-1.aws.data.mongodb-api.com/app/mongostore-elxkl/endpoint/viewProduct";

  const viewProductEvent = async (product) => {
    console.log("CALLING VIEWPRODUCT ENDPOINT FUNCTION");

    const time = new Date();
    const timestamp = time.toISOString();

    const data = {
      customerID: customer._id,
      productID: product._id,
      category: product.category,
      timestamp: timestamp,
      name: product.name,
      price: product.price.value,
      main_image_url: product.main_image_url,
    };

    console.log("DATA SENT: ", data);

    try {
      axios.post(VIEW_PAGE_EVENT_ENDPOINT, data).then((res) => {});
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEARCHTERM: ", searchTerm);
    setSubmitted(true);
    setShowSuggestions(false);
  };

  const fetchAC_Names = async (searchTerm) => {
    let autocomplete_names_endpoint = Suggestions_AC_Endpoint;
    if (searchTerm) {
      autocomplete_names_endpoint =
        autocomplete_names_endpoint + `?searchName=${searchTerm}`;
    }
    try {
      let productNames = await (
        await fetch(autocomplete_names_endpoint)
      ).json();

      setAutoComplete(productNames);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectAutocomplete = (item) => {
    setSearchTerm(item.name);
    viewProductEvent(item);
    setDisplayedProduct({
      name: item.name,
      _id: item._id,
      category: item.category,
      image: item.main_image_url,
      description: item.main_description,
      price: item.price.value,
      highlights: item.highlights,
    });
    setShowSuggestions(false);
    setShowProductModal(!showProductModal);
    setAutoComplete([]);
  };

  return (
    <>
      <header>
        <div
          className={
            showChat
              ? "container mx-auto px-6 py-3 brightness-50"
              : "container mx-auto px-6 py-3"
          }
        >
          <div className="flex items-center justify-between">
            <div className="w-full text-green-600 text-2xl font-semibold cursor-pointer">
              MongoStore
            </div>
            <div className="flex items-center justify-end  space-x-12 w-full">
              {currentCustID !== "63273ef32a32f09fe5d8654f" && (
                <div className="flex items-center">
                  <div className="uppercase mx-2 text-slate-800 text-xl">
                    Hello, {customer.first_name}{" "}
                  </div>
                  <img
                    src={customer?.image}
                    className="shadow-xl rounded-full align-middle border-none w-16"
                    alt="biopic"
                    onClick={() => {
                      setShowUser(true);
                    }}
                  />
                </div>
              )}

              <button
                className="text-gray-600 focus:outline-none mx-4 sm:mx-0 flex"
                onClick={() => {
                  if (currentCustID !== "63273ef32a32f09fe5d8654f")
                    setCurrentCustID("63273ef32a32f09fe5d8654f");
                  else setShowLogin(true);
                }}
              >
                {currentCustID !== "63273ef32a32f09fe5d8654f" ? (
                  <div
                    className=" flex items-center"
                    onClick={() => {
                      setShowCart(false);
                      setShowReplacements(false);
                    }}
                  >
                    {" "}
                    <div className="">Sign Out</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-12 h-12  text-green-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <div className="">Sign In</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-12 h-12  text-green-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </div>
                )}
              </button>
              <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                <ShoppingCartIcon
                  onClick={() => {
                    setShowCart(true);
                  }}
                  className="h-10 w-10 text-slate-700"
                />
              </button>
            </div>
          </div>

          <div className="relative max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5" />
            </span>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </form>
            {showSuggestions && (
              <ul className="absolute inset-x-0 top-full border border-green-600 bg-white rounded-md z-10">
                {autoComplete.map((item) => {
                  return (
                    <li
                      key={item._id}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer border-b "
                      onClick={() => handleSelectAutocomplete(item)}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

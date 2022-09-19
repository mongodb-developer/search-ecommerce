import React, { useState, useEffect, useRef } from "react";

import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
// import Cart from "./Cart";

const Header = ({ searchTerm, setSearchTerm, setShowUser }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [autoComplete, setAutoComplete] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const initial = useRef(true);

  const Suggestions_AC_Endpoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/mongostore-elxkl/endpoint/names";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEARCHTERM: ", searchTerm);
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
      console.log(productNames);

      setAutoComplete(productNames);
      console.log("NAMES: ", autoComplete.length);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    // BUILD OUT AUTOCOMPLETE TERMS
    if (searchTerm === "") setShowSuggestions(false);
    if (searchTerm !== "" && searchTerm.length > 3) {
      fetchAC_Names(searchTerm);

      if (autoComplete.length !== 0) {
        setShowSuggestions(true);
        return;
      }
      setShowSuggestions(false);
    }
    return;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleSelect = (name) => {
    setSearchTerm(name);
    setShowSuggestions(false);
    setAutoComplete([]);
  };

  return (
    <>
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="w-full text-green-600 text-2xl font-semibold cursor-pointer">
              MongoStore
            </div>
            <div className="flex items-center justify-end  space-x-12 w-full">
              <button
                className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
                onClick={() => {
                  setShowUser(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 font-extrabold text-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                <ShoppingCartIcon
                  onClick={() => setIsCartOpen(!isCartOpen)}
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
              <ul className="absolute inset-x-0 top-full border border-green-600 bg-white rounded-md z-20">
                {autoComplete.map((item) => {
                  return (
                    <li
                      key={item._id}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer border-b "
                      onClick={() => handleSelect(item.name)}
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
      {/* <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} /> */}
    </>
  );
};

export default Header;

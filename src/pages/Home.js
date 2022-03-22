import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import Radio from "../components/Radio";
import CheckBox from "../components/Checkbox";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [market, setMarket] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [maxPages, setMaxPages] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showSponsored, setShowSponsored] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const getProductsEndpoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/products";

  const getProducts = async () => {
    let data = {
      searchTerm,
      categories,
      market,
      showSponsored,
      page: currentPage,
    };

    axios.post(getProductsEndpoint, data).then((res) => {
      setProducts(res.data.products);
      console.log(res.data.products);
      if (res.data.products.length !== 0) setShowResults(true);
    });
  };

  useEffect(() => {
    if (searchTerm !== "" && searchTerm.length > 2) {
      getProducts();
      console.log("GETTING PRODUCTS");
    }

    // eslint-disable-next-line
  }, [searchTerm, showSponsored, categories, market]); // add all external values your effect function depends on - none in this case  -- currentPage
  //--------------------------------------------------------

  return (
    <div className="relative flex flex-col items-center min-h-screen py-2">
      <div className=" bg-white w-full ">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Container className="flex-grow">
          <Hero
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            showSponsored={showSponsored}
            setShowSponsored={setShowSponsored}
          />
          <div className="flex flex-grow space-x-8">
            {showFilters && (
              <div className="mb-10">
                <CheckBox
                  categories={categories}
                  setCategories={setCategories}
                  showCode={showCode}
                  setShowCode={setShowCode}
                />
                <Radio
                  options={markets}
                  option={market}
                  setOption={setMarket}
                  title="Marketplace"
                  showCode={showCode}
                  setShowCode={setShowCode}
                />
              </div>
            )}
            {showResults ? (
              <Products products={products} />
            ) : (
              <div className="mt-20 py-2 text-center text-black w-full text-6xl rounded-lg">
                Shopping Results
              </div>
            )}
          </div>
          {/* <Pagination
            maxPages={maxPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          /> */}
        </Container>
        <div className="mt-8 absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

const markets = ["Amazon", "PrimeNow", "AmazonDistribution"];

// const getProductsEndpointDev =
//   "https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/dev";

// const getProductsDev = async () => {
//   let productsReturned = await (
//     await fetch(`${getProductsEndpointDev}?searchTerm=${searchTerm}`)
//   ).json();
//   console.log(productsReturned);
//   setProducts(productsReturned);
//   if (productsReturned.length !== 0) setShowResults(true);
// };

// useEffect(() => {
//   if (searchTerm !== "" && searchTerm.length > 2) {
//     getProductsDev();
//     console.log("GETTING PRODUCTS");
//   }

//   // eslint-disable-next-line
// }, [searchTerm]);

//--------------------------------------------------------
// let productsReturned = await (
//   await fetch(
//     `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/products?searchTerm=${searchTerm}&page=${currentPage}`
//   )
// ).json();
// console.log(productsReturned);
// console.log(
//   `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/products?searchTerm=${searchTerm}&page=${currentPage}`
// );

// console.log("MAXPAGES: ", Object.values(productsReturned.maxPages)[0]);
// setMaxPages(Object.values(productsReturned.maxPages)[0]);
// setProducts(productsReturned.products);
//  const getCategories = async () => {
//    console.log("GETTING CATEGORIES");
//    const categoriesReturned = await (
//      await fetch(
//        `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/categories`
//      )
//    ).json();
//    // console.log("CATEGORIES: ", categoriesReturned); // SEE DO I GET AN ARRAY OF STRINGS BEFORE SETTING
//    setCategories(categoriesReturned);
//  };

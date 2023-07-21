import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import ProductModal from "../components/ProductModal";
import Products from "../components/Products";
// import Radio from "../components/Radio";
import CheckBox from "../components/Checkbox";
import axios from "axios";
import Recommended from "../components/Recommended";

import UserSection from "../components/UserSection";
import Login from "../components/Login";
import Cart from "../components/Cart";
import Replacements from "../components/Replacements";
import ChatSection from "../components/ChatSection";

const Home = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [products, setProducts] = useState(promotedItems);
  const [market, setMarket] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(true);
  const [showSponsored, setShowSponsored] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showReplacements, setShowReplacements] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [displayedProduct, setDisplayedProduct] = useState({});
  const [customer, setCustomer] = useState({});
  const [otherCustomers, setOtherCustomers] = useState([]);
  const [showUser, setShowUser] = useState(false);
  const [currentCustID, setCurrentCustID] = useState(
    "63273ef32a32f09fe5d8654f"
  );
  const [cartItems, setCartItems] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [moreLikeThis, setMoreLikeThis] = useState(recommendedBaseProducts);
  const [viewedProduct, setViewedProduct] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const getProductsEndpoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/mongostore-elxkl/endpoint/products";

  const getUsersEndpoint = `https://us-east-1.aws.data.mongodb-api.com/app/mongostore-elxkl/endpoint/users?id=${currentCustID}`;

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
      setMaxPages(res.data.maxPages);

      if (res.data.products.length !== 0) setShowResults(true);
    });
  };

  const getCustomersInfo = () => {
    axios.get(getUsersEndpoint).then((response) => {
      console.log("USER: ", response.data.customer);
      console.log("USER: ", response.data.customer.email);
      console.log("OTHERS: ", response.data.otherCustomers.length);
      setCartItems(response.data.customer.cart);

      setCustomer(response.data.customer);
      setRecommendedProducts(response.data.customer.recentViews);
      setOtherCustomers(response.data.otherCustomers);
      console.log("CART", cartItems);
    });
  };

  useEffect(() => {
    getCustomersInfo();
    setMoreLikeThis([]);
    // setProducts(promotedItems);
    setMaxPages(1);
    setCurrentPage(1);

    setViewedProduct(false);

    // eslint-disable-next-line
  }, [currentCustID]);

  useEffect(() => {
    if (searchTerm !== "" && searchTerm.length > 4) {
      getProducts();
    }
    if (searchTerm === "") {
      setProducts(promotedItems);
    }
    if (submitted) {
      getProducts();
    }
    setSubmitted(false);

    // eslint-disable-next-line
  }, [submitted, searchTerm, showSponsored, categories, market, currentPage]); // add all external values your effect function depends on - none in this case  -- currentPage

  useEffect(() => {
    if (!showProductModal) return;

    let cat = products[0].category;
    if (!cat) {
      cat = "Clothing";
    }

    // eslint-disable-next-line
  }, [showProductModal]);

  return (
    <div className="relative flex flex-col items-center min-h-screen py-2">
      <div className=" bg-white w-full ">
        {showChat && (
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-smoke-dark "></div>
        )}
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setShowUser={setShowUser}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
          setSubmitted={setSubmitted}
          setDisplayedProduct={setDisplayedProduct}
          showProductModal={showProductModal}
          setShowProductModal={setShowProductModal}
          customer={customer}
          signedIn={signedIn}
          setSignedIn={setSignedIn}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          currentCustID={currentCustID}
          setCurrentCustID={setCurrentCustID}
          showCart={showCart}
          setShowCart={setShowCart}
          setShowReplacements={setShowReplacements}
          showChat={showChat}
        />
        {showLogin && (
          <Login
            setShowLogin={setShowLogin}
            setCurrentCustID={setCurrentCustID}
            currentCustID={currentCustID}
          />
        )}
        {showUser && (
          <UserSection
            setShowUser={setShowUser}
            customer={customer}
            setCustomer={setCustomer}
            otherCustomers={otherCustomers}
            setCurrentCustID={setCurrentCustID}
          />
        )}
        {showCart && (
          <div className="flex absolute top-20 right-8">
            {showReplacements && (
              <Replacements
                setShowReplacements={setShowReplacements}
                currentCustID={currentCustID}
              />
            )}
            <Cart
              showCart={showCart}
              setShowCart={setShowCart}
              cartItems={cartItems}
              currentCustID={currentCustID}
              setShowReplacements={setShowReplacements}
            />
          </div>
        )}
        <Container className="flex-grow">
          <Hero
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            showSponsored={showSponsored}
            setShowSponsored={setShowSponsored}
            showChat={showChat}
          />
          {currentCustID !== "63273ef32a32f09fe5d8654f" && (
            <Recommended
              recommendedProducts={recommendedProducts}
              showProductModal={showProductModal}
              setShowProductModal={setShowProductModal}
              setDisplayedProduct={setDisplayedProduct}
              setViewedProduct={setViewedProduct}
              setShowSuggestions={setShowSuggestions}
              customer={customer}
              showChat={showChat}
            />
          )}
          <div className="flex flex-grow space-x-2">
            {showFilters && (
              <div className="mb-10">
                <CheckBox
                  categories={categories}
                  setCategories={setCategories}
                />
                {/* <Radio
                  options={markets}
                  option={market}
                  setOption={setMarket}
                  title="Marketplace"
                /> */}
              </div>
            )}
            {showResults ? (
              <Products
                products={products}
                showProductModal={showProductModal}
                setShowProductModal={setShowProductModal}
                setDisplayedProduct={setDisplayedProduct}
                customer={customer}
                setViewedProduct={setViewedProduct}
                setShowSuggestions={setShowSuggestions}
                moreLikeThis={moreLikeThis}
                setMoreLikeThis={setMoreLikeThis}
                searchTerm={searchTerm}
                showChat={showChat}
              />
            ) : (
              <div className="mt-20 py-2 text-center text-black w-full text-6xl rounded-lg">
                Shopping Results
              </div>
            )}
          </div>
          {showProductModal && (
            <ProductModal
              setShowProductModal={setShowProductModal}
              displayedProduct={displayedProduct}
              setViewedProduct={setViewedProduct}
              customer={customer}
              moreLikeThis={moreLikeThis}
            />
          )}
          {maxPages > 1 && (
            <Pagination
              maxPages={maxPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}

          <div className="fixed inset-x-0 bottom-16 right-0 z-10 mr-12">
            <ChatSection showChat={showChat} setShowChat={setShowChat} />
          </div>
        </Container>

        <div className=" mt-8 absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

const markets = ["Amazon", "PrimeNow", "AmazonDistribution"];

const promotedItems = [
  {
    _id: "6320911ce41329d01899de27",
    category: "Clothing",
    main_image_url:
      "https://search-demos.s3.us-east-2.amazonaws.com/cplusplus.jpg",
    marketplace: "PrimeNow",
    name: "C++ Hoodie",
    price: {
      value: 49,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de28",
    category: "Clothing",
    main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/vite.jpg",
    marketplace: "Amazon",
    name: "Vite T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de29",
    category: "Clothing",
    main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/css.jpg",
    marketplace: "Amazon",
    name: "CSS Sweater",
    price: {
      value: 49,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de2a",
    category: "Clothing",
    main_image_url:
      "https://search-demos.s3.us-east-2.amazonaws.com/mongodb.png",
    marketplace: "PrimeNow",
    name: "MongoDB T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de2b",
    category: "Clothing",
    main_image_url:
      "https://search-demos.s3.us-east-2.amazonaws.com/github.jpg",
    marketplace: "Amazon",
    name: "GitHub Mask",
    price: {
      value: 19,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de2c",
    category: "Clothing",
    main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/html.jpg",
    marketplace: "Amazon",
    name: "HTML T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de2d",
    category: "Clothing",
    main_image_url:
      "https://search-demos.s3.us-east-2.amazonaws.com/vscode.jpg",
    marketplace: "Amazon",
    name: "VS Code T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de2e",
    category: "Clothing",
    main_image_url:
      "https://search-demos.s3.us-east-2.amazonaws.com/node.js.jpg",
    marketplace: "Amazon",
    name: "Node.js T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
  // {
  //   _id: "6320911ce41329d01899de2f",
  //   category: "Clothing",
  //   main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/npm.jpg",
  //   marketplace: "Amazon",
  //   name: "npm Hat",
  //   price: {
  //     value: 29,
  //     currency: "USD",
  //   },
  // },
  // {
  //   _id: "6320911ce41329d01899de30",
  //   category: "Clothing",
  //   main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/java.jpg",
  //   marketplace: "Amazon",
  //   name: "Java T-Shirt",
  //   price: {
  //     value: 39,
  //     currency: "USD",
  //   },
  // },
  // {
  //   _id: "6320911ce41329d01899de31",
  //   category: "Clothing",
  //   main_image_url:
  //     "https://search-demos.s3.us-east-2.amazonaws.com/python.jpg",
  //   marketplace: "Amazon",
  //   name: "Python T-Shirt",
  //   price: {
  //     value: 39,
  //     currency: "USD",
  //   },
  // },
  // {
  //   _id: "6320911ce41329d01899de32",
  //   category: "Clothing",
  //   main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/vue.jpg",
  //   marketplace: "Amazon",
  //   name: "Vue T-Shirt",
  //   price: {
  //     value: 39,
  //     currency: "USD",
  //   },
  // },
];

const recommendedBaseProducts = [
  {
    _id: "6320911ce41329d01899de2f",
    category: "Clothing",
    main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/npm.jpg",
    marketplace: "Amazon",
    name: "npm Hat",
    price: {
      value: 29,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de30",
    category: "Clothing",
    main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/java.jpg",
    marketplace: "Amazon",
    name: "Java T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de2f",
    category: "Clothing",
    main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/npm.jpg",
    marketplace: "Amazon",
    name: "npm Hat",
    price: {
      value: 29,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de30",
    category: "Clothing",
    main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/java.jpg",
    marketplace: "Amazon",
    name: "Java T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de31",
    category: "Clothing",
    main_image_url:
      "https://search-demos.s3.us-east-2.amazonaws.com/python.jpg",
    marketplace: "Amazon",
    name: "Python T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
  {
    _id: "6320911ce41329d01899de32",
    category: "Clothing",
    main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/vue.jpg",
    marketplace: "Amazon",
    name: "Vue T-Shirt",
    price: {
      value: 39,
      currency: "USD",
    },
  },
];

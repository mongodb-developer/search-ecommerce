import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import ProductModal from "../components/ProductModal";
import Products from "../components/Products";
import Radio from "../components/Radio";
import CheckBox from "../components/Checkbox";
import axios from "axios";
import RecentlyViewed from "../components/RecentlyViewed";
import Recommended from "../components/Recommended";
import UserSection from "../components/UserSection";

const Home = () => {
  const [products, setProducts] = useState(promotedItems);
  const [market, setMarket] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(true);
  const [showSponsored, setShowSponsored] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [showProductModal, setShowProductModal] = useState(false);
  const [productIndex, setProductIndex] = useState(-100);
  const [customer, setCustomer] = useState({});
  const [showUser, setShowUser] = useState(false);
  const [otherCustomers, setOtherCustomers] = useState([]);
  const [currentCustID, setCurrentCustID] = useState("63229e0ae634e04e58252a73");
  const [customerRecentViews, setCustomerRecentViews] =
    useState(recentProducts);

  const getProductsEndpoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/mongostore-elxkl/endpoint/products";
  const getCurrentCustomerEndpoint = `https://us-east-1.aws.data.mongodb-api.com/app/storecustomerdata-hatrb/endpoint/single_customer?id=${currentCustID}`;
  const getAllCustomersEndpoint =
    `https://us-east-1.aws.data.mongodb-api.com/app/storecustomerdata-hatrb/endpoint/allCustomers?id=${currentCustID}`;

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
      console.log(res.data.maxPages);
      console.log("Max Pages: ", res.data.products);
      if (res.data.products.length !== 0) setShowResults(true);
    });
  };

  const getMainCustomer = () => {
    axios.get(getCurrentCustomerEndpoint).then((response) => {
      console.log(response.data);
      setCustomer(response.data);
      setCustomerRecentViews(response.data.kwh_recentViews);
    });
    axios.get(getAllCustomersEndpoint).then((response) => {
      setOtherCustomers(response.data);
      console.log(response.data[1].first_name);
    });
  };

  useEffect(() => {
    console.log("GETTING MAIN CUSTOMER");
    getMainCustomer();

    // eslint-disable-next-line
  }, [currentCustID]);

  useEffect(() => {
    if (searchTerm !== "" && searchTerm.length > 2) {
      getProducts();
      console.log("GETTING PRODUCTS");
    }

    // eslint-disable-next-line
  }, [searchTerm, showSponsored, categories, market, currentPage]); // add all external values your effect function depends on - none in this case  -- currentPage

  return (
    <div className="relative flex flex-col items-center min-h-screen py-2">
      <div className=" bg-white w-full ">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setShowUser={setShowUser}
        />
        {showUser && (
          <UserSection
            setShowUser={setShowUser}
            customer={customer}
            setCustomer={setCustomer}
            otherCustomers={otherCustomers}
            setCurrentCustID={setCurrentCustID}
          />
        )}
        <Container className="flex-grow">
          <Hero
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            showSponsored={showSponsored}
            setShowSponsored={setShowSponsored}
          />
          <div className="flex flex-grow space-x-2">
            {showFilters && (
              <div className="mb-10">
                <CheckBox
                  categories={categories}
                  setCategories={setCategories}
                />
                <Radio
                  options={markets}
                  option={market}
                  setOption={setMarket}
                  title="Marketplace"
                />
              </div>
            )}
            {showResults ? (
              <Products
                products={products}
                productIndex={productIndex}
                setProductIndex={setProductIndex}
                showProductModal={showProductModal}
                setShowProductModal={setShowProductModal}
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
              products={products}
              productIndex={productIndex}
            />
          )}
          <hr></hr>
          <RecentlyViewed
            recentProducts={customerRecentViews}
            productIndex={productIndex}
            setProductIndex={setProductIndex}
            showProductModal={showProductModal}
            setShowProductModal={setShowProductModal}
          />
          <Recommended
            recentProducts={recentProducts}
            productIndex={productIndex}
            setProductIndex={setProductIndex}
            showProductModal={showProductModal}
            setShowProductModal={setShowProductModal}
          />
          <Pagination
            maxPages={maxPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
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

const recentProducts = [
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

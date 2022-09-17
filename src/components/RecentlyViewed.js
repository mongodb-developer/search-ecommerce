import React from "react";
import Product from "./Product";

const RecentlyViewed = ({
  recentProducts,
  setProductIndex,
  setShowProductModal,
  showProductModal,
}) => {
  return (
    <div className="shadow-2xl bg-purple-800 w-full rounded my-2 overflow-hidden">
      <div className="text-white text-2xl pl-4 pt-2">Recently Viewed</div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-4 py-2">
        {recentProducts.map((product, idx) => (
          <Product
            key={idx}
            index={idx}
            product={product}
            setProductIndex={setProductIndex}
            setShowProductModal={setShowProductModal}
            showProductModal={showProductModal}
            source="RecentlyViewed"
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;

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

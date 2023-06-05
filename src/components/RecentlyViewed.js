import React from "react";
import Product from "./Product";

const RecentlyViewed = ({
  recentProducts,
  setShowProductModal,
  showProductModal,
  setDisplayedProduct,
  setShowSuggestions,
  customer,
}) => {
  const SixProducts = recentProducts.slice(0, 6);

  return (
    <div className="shadow-2xl bg-gradient-to-r from-green-700 to-green-900 w-full rounded my-2 overflow-hidden mb-10">
      <div className="text-white text-2xl pl-4 pt-2">
        Recommended Just for You
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-4 py-2">
        {SixProducts.map((product, idx) => (
          <Product
            key={idx}
            index={idx}
            product={product}
            setShowProductModal={setShowProductModal}
            showProductModal={showProductModal}
            source="RecentlyViewed"
            setDisplayedProduct={setDisplayedProduct}
            setShowSuggestions={setShowSuggestions}
            customer={customer}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;

// const recentProducts = [
//   {
//     _id: "6320911ce41329d01899de2f",
//     category: "Clothing",
//     main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/npm.jpg",
//     marketplace: "Amazon",
//     name: "npm Hat",
//     price: {
//       value: 29,
//       currency: "USD",
//     },
//   },
//   {
//     _id: "6320911ce41329d01899de30",
//     category: "Clothing",
//     main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/java.jpg",
//     marketplace: "Amazon",
//     name: "Java T-Shirt",
//     price: {
//       value: 39,
//       currency: "USD",
//     },
//   },
//   {
//     _id: "6320911ce41329d01899de31",
//     category: "Clothing",
//     main_image_url:
//       "https://search-demos.s3.us-east-2.amazonaws.com/python.jpg",
//     marketplace: "Amazon",
//     name: "Python T-Shirt",
//     price: {
//       value: 39,
//       currency: "USD",
//     },
//   },
//   {
//     _id: "6320911ce41329d01899de32",
//     category: "Clothing",
//     main_image_url: "https://search-demos.s3.us-east-2.amazonaws.com/vue.jpg",
//     marketplace: "Amazon",
//     name: "Vue T-Shirt",
//     price: {
//       value: 39,
//       currency: "USD",
//     },
//   },
// ];

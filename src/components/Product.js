import React, { useState } from "react";
import axios from "axios";

import { ShoppingCartIcon } from "@heroicons/react/outline";

const Product = ({
  product,
  index,
  customer,
  showProductModal,
  setShowProductModal,
  setDisplayedProduct,
  source,
}) => {
  const VIEW_PAGE_EVENT_ENDPOINT =
    "https://us-east-1.aws.data.mongodb-api.com/app/mongostore-elxkl/endpoint/viewProduct";
  const viewProductEvent = async () => {
    console.log("SEND VIEW MESSAGE: ", product._id);
    console.log(product.category);

    const time = new Date();
    const timestamp = time.toISOString();
    console.log(timestamp);
    const data = {
      customerID: customer._id,
      productID: product._id,
      category: product.category,
      timestamp: timestamp,
      name: product.name,
      price: product.price,
      main_image_url: product.main_image_url,
    };

    try {
      axios.post(VIEW_PAGE_EVENT_ENDPOINT, data).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div href={`/products/${product._id}`}>
      <div
        onClick={() => {
          setShowProductModal(!showProductModal);

          setDisplayedProduct({
            name: product.name,
            _id: product._id,
            category: product.category,
          });
          viewProductEvent();
          console.log("PRODUCT ID: ", product._id);
          console.log("PRODUCT NAME: ", product.name);
        }}
        className={
          source === "Home"
            ? "w-full max-w-sm mx-auto rounded-md shadow-md cursor-pointer hover:shadow-2xl transition relative"
            : `bg-white h-48 w-full max-w-sm mx-auto rounded-md shadow-md cursor-pointer hover:shadow-2xl overflow-auto transition relative`
        }
      >
        <div
          className={
            source === "Home"
              ? "flex items-end justify-end w-full h-48 bg-cover"
              : "flex items-end justify-end h-36 w-full bg-cover"
          }
        >
          <img
            src={product.main_image_url}
            alt={product.name}
            className={
              source === "Home"
                ? "object-scale-down h-36 w-full"
                : "object-scale-down h-28 w-full"
            }
          />

          <button className="absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500">
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-3">
          <div className="text-gray-900 text-sm uppercase">{product?.name}</div>
          {product.category && (
            <h3 className="text-green-800 text-sm">
              CATEGORY: {product?.category}
            </h3>
          )}
          <span className="text-gray-500 mt-2">${product?.price.value}</span>
          <h3 className="text-red-500 mt-2">{product?.marketplace}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;

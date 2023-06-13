import React from "react";
import Product from "./Product";

const Products = ({
  products,
  setDisplayedProduct,
  customer,
  showProductModal,
  setShowProductModal,
  setShowSuggestions,
  moreLikeThis,
  setMoreLikeThis,
  searchTerm,
  showChat,
}) => {
  return (
    <div
      className={
        showChat
          ? "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 brightness-50"
          : "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
      }
    >
      {products.map((product, idx) => (
        <Product
          key={idx}
          index={idx}
          product={product}
          customer={customer}
          setShowProductModal={setShowProductModal}
          showProductModal={showProductModal}
          source="Home"
          setDisplayedProduct={setDisplayedProduct}
          setShowSuggestions={setShowSuggestions}
          moreLikeThis={moreLikeThis}
          setMoreLikeThis={setMoreLikeThis}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
};

export default Products;

import React from "react";
import Product from "./Product";

const Products = ({
  products,

  setProductIndex,
  showProductModal,
  setShowProductModal,
}) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {products.map((product, idx) => (
        <Product
          key={idx}
          index={idx}
          product={product}
          setProductIndex={setProductIndex}
          setShowProductModal={setShowProductModal}
          showProductModal={showProductModal}
          source="Home"
        />
      ))}
    </div>
  );
};

export default Products;

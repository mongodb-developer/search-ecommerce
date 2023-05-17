import React from "react";
import Product from "./Product";

const Recommended = ({
  recentProducts,
  setShowProductModal,
  showProductModal,
  setDisplayedProduct,
  setShowSuggestions,
  customer,
}) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 w-full rounded my-2 overflow-hidden h-96">
      <div className="text-white text-2xl pl-4 pt-2">More Like This</div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 px-4 py-2">
        {recentProducts.map((product, idx) => (
          <Product
            key={idx}
            index={idx}
            product={product}
            setShowProductModal={setShowProductModal}
            showProductModal={showProductModal}
            setDisplayedProduct={setDisplayedProduct}
            source="Recommended"
            setShowSuggestions={setShowSuggestions}
            customer={customer}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;

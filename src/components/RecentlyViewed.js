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
    <div className="shadow-2xl bg-gradient-to-r from-green-900 to-black w-full rounded my-2 overflow-hidden my-10">
      <div className="text-white text-2xl pl-4 pt-2">
        Recommended Just for You
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-4 pb-6 pt-2">
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

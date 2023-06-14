import React from "react";
import Product from "./Product";

const RecentlyViewed = ({
  recentProducts,
  setShowProductModal,
  showProductModal,
  setDisplayedProduct,
  setShowSuggestions,
  customer,
  showChat,
}) => {
  const SixProducts = recentProducts.slice(0, 6);

  return (
    <div
      className={
        showChat
          ? "shadow-2xl bg-gradient-to-r from-green-900 to-black w-full rounded overflow-hidden my-10 brightness-50 hover:scale-110 transition-transform duration-500"
          : "shadow-2xl bg-gradient-to-r from-green-900 to-black w-full rounded overflow-hidden my-10 hover:scale-110 transition-transform duration-500"
      }
    >
      <div className="text-white text-2xl pl-4 pt-2">
        Recommended Just for You
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-4 pb-6 pt-2 ">
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

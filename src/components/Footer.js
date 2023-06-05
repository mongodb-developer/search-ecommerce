import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-700">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold  text-white cursor-pointer">
          MongoDB .local NYC
        </div>
        <p className="py-2 text-gray-200 sm:py-0">June 22, 2023</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import UserCard from "./UserCard";
import CurrentUser from "./CurrentUser";

const UserSection = ({
  otherCustomers,
  setShowUser,
  customer,
  setCurrentCustID,
}) => {
  return (
    <div className="absolute top-20 right-20 text-xl text-white bg-gradient-to-t from-red-900 to-red-800 p-8 z-40 rounded-lg w-1/3">
      <CurrentUser customer={customer} />
      <div
        className="absolute bottom-2 right-2"
        onClick={() => {
          setShowUser(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserSection;

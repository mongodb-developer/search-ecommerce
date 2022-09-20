import React from "react";

const UserCard = ({ user, setCurrentCustID }) => {
  const name = user.first_name + " " + user.last_name;
  return (
    <div className="bg-white rounded-xl border border-gray-800 w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
      <div className="profile w-full flex m-3 ml-4 text-slate-700">
        <img
          className="w-16 h-16 p-1 bg-slate-600 rounded-full z-20"
          src={user.image}
          alt="person"
        />
        <div className="justify-center ml-3 font-bold flex flex-col">
          <div className="text-base">{name}</div>

          <div className=" text-gray-500 text-sm italic ">{user.email}</div>
        </div>
      </div>
      <button
        className=" flex absolute bottom-0 font-bold right-0 text-xs text-gray-400 space-x-0 my-3.5 mr-3"
        onClick={() => {
          setCurrentCustID(user._id);
        }}
      >
        <div className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
          Select
        </div>
      </button>
    </div>
  );
};

export default UserCard;

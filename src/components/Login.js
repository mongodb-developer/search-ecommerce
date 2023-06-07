import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({ setCurrentCustID, setShowLogin, currentCustID }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.email);
    if (data.email.toLowerCase() === "amaleal@gmail.com")
      setCurrentCustID("63229e0ae634e04e58252a74");
    if (data.email.toLowerCase() === "scott@streammeup.com")
      setCurrentCustID("63229e0ae634e04e58252a71");
    setShowLogin(false);
  };

  //     email: "",
  //     password: "",
  //   });
  // This function will be called whenever the user edits the form.
  //   const onFormInputChange = (event) => {
  //     console.log("Change");
  //     const { name, value } = event.target;
  //     setForm({ ...form, [name]: value });
  //   };

  //   const onSubmit = async (data) => {
  //     console.log("SUBMITTED");

  //     try {
  //       // Here we are passing user details to our emailPasswordLogin
  //       // function that we imported from our realm/authentication.js
  //       // to validate the user credentials and login the user into our App.
  //       console.log("EMAIL", data.email);
  //       console.log("PASSWORD", data.password);

  //       setCurrentCustID("63229e0ae634e04e58252a74");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  return (
    <div className="absolute top-20 right-20 text-xl text-white bg-gradient-to-t from-gray-900 to-gray-600 p-8 z-20 rounded-lg">
      {/* <CurrentUser customer={customer} /> */}
      <div className="flex items-center space-x-8 justify-center">
        LOG IN COMPONENT
      </div>
      <div className="pt-10">
        <form
          className="bg-white py-8  mx-auto rounded px-8"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className="flex items-center mb-5">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              {...register("email")}
              className="border-b-2 border-gray-400 focus:border-green-800 w-full flex-1 py-2 placeholder-gray-300 outline-none text-gray-700 "
            />
          </div>

          <div className="flex items-center mb-10">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Super secret password"
              {...register("password")}
              className="border-b-2 border-gray-400 w-full flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-800 text-gray-700"
            />
          </div>
          <div class="text-right">
            <button
              type="submit"
              className="py-3 px-8 bg-green-500 text-white font-bold rounded w-full"
            >
              Log In
            </button>
          </div>
        </form>
      </div>

      <div
        className="absolute bottom-2 right-2"
        onClick={() => {
          setShowLogin(false);
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

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import signUp from "../../assets/signUp.jpg";

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 max-w-7xl mx-auto my-20 md:grid-cols-2 gap-6">
      <div>
        <img className="w-full h-full" src={signUp} alt="" />
      </div>
      <div className="w-full max-w-md mx-auto p-4 shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Sign Up your account
        </h2>
        <form noValidate="" action="" className="space-y-8 mt-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name here..."
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="photo" className="block">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="">
                Confirmed Password
              </label>
              <input
                type="password"
                name="confirmed_password"
                id="confirmed_password"
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md bg-info dark:bg-violet-600 dark:text-gray-50"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to={"/signIn"} className="hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

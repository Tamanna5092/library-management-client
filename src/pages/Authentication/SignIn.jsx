import React, { useContext } from "react";
import signIn from '../../assets/signIn.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const SignIn = () => {
  const {showPassword, setShowPassword} = useContext(AuthContext)

  return (
    <div className="grid grid-cols-1 max-w-7xl mx-auto my-20 md:grid-cols-2 gap-6">
      <div className="">
        <img className="w-full h-full" src={signIn} alt="" />
      </div>
      <div className="w-full p-4 shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form noValidate="" action="" className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block">
                Email address
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
              <div className="flex justify-between">
                <label htmlFor="password" className="">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <span onClick={()=> setShowPassword(!showPassword)} className=" absolute top-3 right-3">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md bg-info dark:bg-violet-600 dark:text-gray-50"
          >
            Sign in
          </button>
        </form>
        <p className="text-center mt-4">Don't have account?{' '}<Link to={'/signUp'} className="hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;

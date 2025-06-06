import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/signUp.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const {showPassword, setShowPassword, createUser, user, setUser, updateUser, error, setError} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const fromState = location.state || '/'

  // create user
  const handleSignUp = async(e) => {
    e.preventDefault()
    const from = e.target
    const name = from.name.value
    const email = from.email.value
    const photo = from.photo.value
    const password = from.password.value
    const confirmedPassword = from.confirmed_password.value

    setError("")

    if(password.length < 6){
      setError('Password must be at least 6 characters')
      return
    }
    else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)){
      setError('Password must be contain at least one uppercase letter and one number.')
      return
    }
    else if(password !== confirmedPassword){
      setError('Password does not match')
      return
    }

    try {
      const result = await createUser(email, password)
      await updateUser(name, photo)
      setUser({...result?.user, displayName:name, photoURL:photo})
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {email: result?.user?.email}, {withCredentials: true })
      toast.success('User Create Successful')
      navigate(fromState, {replace: true})
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="grid grid-cols-1 max-w-7xl mx-auto my-20 md:grid-cols-2 gap-6">
      <div>
        <img className="w-full h-full" src={signUpImg} alt="" />
      </div>
      <div className="w-full p-4 shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Sign Up your account
        </h2>
        <form onSubmit={handleSignUp} className="space-y-8 mt-8">
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
                placeholder="photo url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="">
                Password
              </label>
              <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <span onClick={()=> setShowPassword(!showPassword)} className=" absolute top-3 right-3 cursor-pointer">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
              </div>
            </div> 
            <div className="space-y-2">
              <label htmlFor="password" className="">
                Confirmed Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmed_password"
                id="confirmed_password"
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold bg-black text-white border-none hover:bg-[#FF5722]"
          >
            Sign Up
          </button>
        </form>
        {
          error && <p className="text-center text-red-800 mt-4">{error}</p>
        }
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

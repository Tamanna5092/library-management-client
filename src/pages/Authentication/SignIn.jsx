import React, { useContext } from "react";
import signinImg from '../../assets/signIn.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import google from '../../assets/icons/search.png'
import github from '../../assets/icons/github.png'

const SignIn = () => {
  const {showPassword, setShowPassword, signInWithGoogle, signInWithGithub, signIn, error, setError} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const fromState = location.state || '/'

  // google sign in
  const handleGoogleSignIn = async() => {
    try {
      await signInWithGoogle()
      toast.success('Sign In Successful')
      navigate(fromState, {replace: true})
    } catch (error) {
      console.error(error)
    }
  }

  // github sign in
  const handleGithubSignIn = async() => {
    try {
      await signInWithGithub()
      toast.success('Sign In Successful')
      navigate(fromState, {replace: true})
    } catch (error) {
      console.error(error)
    }
  }

  // email password sign in
  const handleSignIn = async(e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    setError('')

    try {
      const result = await signIn(email, password)
      toast.success('Sign In Successful')
      console.log(result.user)
      navigate(fromState, {replace: true})
    } catch (error) {
      console.error(error)
       setError('Invalid email or password')
    }
  }

  return (
    <div className="grid grid-cols-1 max-w-7xl mx-auto my-20 md:grid-cols-2 gap-6">
      <div className="">
        <img className="w-full h-full" src={signinImg} alt="" />
      </div>
      <div className="w-full p-4 shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h4 className="mb-3 text-xl font-semibold text-center">
          Welcome back!
        </h4>
        <div onClick={handleGoogleSignIn} className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
             <img src={google} alt="" className="w-6 h-6 fill-current" />
            <p>Signin with Google</p>
          </button>
        </div>
        <div onClick={handleGithubSignIn} className="my-6 space-y-4">
          <button
            aria-label="Login with Github"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <img src={github} alt="" className="w-6 h-6 fill-current" />
            <p>Signin with GitHub</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form onSubmit={handleSignIn} className="space-y-8">
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
              <span onClick={()=> setShowPassword(!showPassword)} className=" absolute top-3 right-3 cursor-pointer">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-black text-white border-none hover:bg-[#FF5722]"
          >
            Sign In
          </button>
        </form>
        {
          error && <p className="text-center text-red-800 mt-4">{error}</p>
        }
        <p className="text-center mt-4">Don't have account?{' '}<Link to={'/signUp'} className="hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;

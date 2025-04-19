import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import BookDetails from "../pages/BookDetails/BookDetails";
import AddBook from "../pages/AddBook/AddBook";
import BorrowedBooks from "../pages/Borrow/BorrowedBooks";
import AllBooks from "../pages/AllBooks/AllBooks";
import UpdateBook from "../pages/UpdateBook/UpdateBook";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/book/:id',
          element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`)
        },
        {
          path: '/addBook',
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path : '/allBooks',
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        },
        {
          path: '/borrowedBooks',
          element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        },
        {
          path: '/updateBook/:id',
          element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`)
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
  ]);

  export default Route
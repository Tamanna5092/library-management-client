import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import BookDetails from "../pages/BookDetails/BookDetails";
import AddBook from "../pages/AddBook/AddBook";
import BorrowedBooks from "../pages/Borrow/BorrowedBooks";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          element: <BookDetails></BookDetails>,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`)
        },
        {
          path: '/addBook',
          element: <AddBook></AddBook>
        },
        {
          path: '/borrowedBooks',
          element: <BorrowedBooks></BorrowedBooks>
        }
      ]
    },
  ]);

  export default Route
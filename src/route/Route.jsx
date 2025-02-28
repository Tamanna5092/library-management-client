import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Authentication/SignIn";

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
        }
      ]
    },
  ]);

  export default Route
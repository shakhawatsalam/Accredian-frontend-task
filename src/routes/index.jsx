import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignupPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
]);

export default routes;

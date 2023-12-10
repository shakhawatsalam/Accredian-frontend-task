import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  //   {
  //     path: "update/:id",
  //     element: <UpdateUserPage />,
  //   },
  //   {
  //     path: "/create",
  //     element: <CreateUserPage />,
  //   },
  //   {
  //     path: "/teams",
  //     element: <AllteamPage />,
  //   },
]);

export default routes;

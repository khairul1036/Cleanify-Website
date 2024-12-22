import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/AddService";
import AllService from "../pages/AllService";
import SingleServiceDetails from "../pages/SingleServiceDetails";
import MyBooking from "../pages/MyBooking";
import ManageServices from "../pages/ManageServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/services",
        element: <AllService></AllService>,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <SingleServiceDetails/>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-booking",
        element: (
          <PrivateRoute>
            <MyBooking/>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRoute>
            <ManageServices/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

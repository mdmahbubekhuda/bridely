import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "../pages/PrivateRoutes/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Gallery from "../pages/PrivateRoutes/Gallery";
import Shop from "../pages/PrivateRoutes/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => fetch("/services.json"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/:serviceId",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        ),
      },
      {
        path: "/jewel",
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

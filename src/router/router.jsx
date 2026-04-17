import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Forget from "../pages/Auth/Forget/Forget";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/rider",
        element: <PrivateRoute><Rider /></PrivateRoute>,
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forget",
        Component: Forget,
      },
    ],
  },
]);

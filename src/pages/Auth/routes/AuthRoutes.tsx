import { RouteObject } from "react-router-dom";
import AuthLayout from "../../../assets/layout/AuthLayout";
import Login from "../Login";

const AuthRoutes: RouteObject = {
  path: "/auth",
  element: <AuthLayout />,
  children: [{ path: "login", element: <Login /> }],
};

export default AuthRoutes;

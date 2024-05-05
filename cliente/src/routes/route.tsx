import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import SignupPage from "../page/SignupPage";
import HomePage from "../page/HomePage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {},
]);

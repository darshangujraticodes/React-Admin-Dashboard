import { createBrowserRouter } from "react-router";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import App from "./App";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "products", element: <Products /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

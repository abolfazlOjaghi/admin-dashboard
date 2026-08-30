import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import RootLayout from "./layouts/RootLayout";
import Products from "./pages/products/Products";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import ProductInfo from "./pages/productInfo/ProductInfo";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/userProfile/UserProfilePage";
import ProtectRoots from "./ProtectRoots";
import Login from "./pages/Login";
const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectRoots />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/products/:productId",
            element: <ProductInfo />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/users/:userId",
            element: <UserProfile />,
          },
          {
            path: "/comments",
            element: <Comments />,
          },
          {
            path: "*",
            element: <NotFound />,
            handle: {
              isNotFound: true,
            },
          },
        ],
      },
    ],
  },
]);
export default routes;

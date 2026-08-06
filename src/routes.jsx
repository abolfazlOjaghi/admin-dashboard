import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import RootLayout from "./layouts/RootLayout";
import Products from "./pages/products/Products";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import ProductInfo from "./pages/productInfo/ProductInfo";
const routes = createBrowserRouter([
    {
        path : "/",
        element : <RootLayout/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : "/products",
                element : <Products/>
            },
            {
                path : "/products/:productId",
                element : <ProductInfo/>
            },
            {
                path : "/users",
                element : <Users/>
            },
            {
                path : "/comments",
                element : <Comments/>
            }
        ]
    }
])
export default routes
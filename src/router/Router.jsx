import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllProduct from "../components/ProductCard/AllProduct/AllProduct";
import PrivateRoutes from "./PrivateRoutes";
import Carts from "../components/carts/Carts";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {   
            path: "/",
            element: <Home></Home>
        }, 
        {
          path: `/product/:id`,
          element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>
        }, 
        {
          path: '/product',
          element: <AllProduct></AllProduct>
        },
         {
          path: '/carts',
          element: <Carts></Carts>
        }, 
        
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    }
  ]);

  export default router;
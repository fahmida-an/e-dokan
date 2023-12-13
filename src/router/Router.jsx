import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";
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
          element: <ProductDetails></ProductDetails>
        }
      ]
    },
  ]);

  export default router;
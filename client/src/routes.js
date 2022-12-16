import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
  

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
      { path: "*", element: <div>404 NOT FOUND</div> },
    ],
  },
]);  

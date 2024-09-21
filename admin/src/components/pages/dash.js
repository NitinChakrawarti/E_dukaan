import React from "react";
import Layout from "../layout.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Additem,
  OurProducts,
  Dashboard,
  Orders,
} from "../allcompo.js";


function Dash() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      children: [
        {
          path:"/products",
          element: <OurProducts />,
        },
        {
          path:"/additem",
          element: <Additem />,
        },
        {
          path:"/",
          element: <Dashboard />,
        },
        {
          path:"/orders",
          element: <Orders />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="flex flex-row">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default Dash;

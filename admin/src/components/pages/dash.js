import React from "react";
import Layout from "../layout.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Additem,
  OurProducts,
} from "../allcompo.js";


function Dash() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      children: [
        {
          path:"/",
          element: <OurProducts />,
        },
        {
          path:"/additem",
          element: <Additem />,
        }
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

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { log10 } from "chart.js/helpers";
import Loader from "./loader";

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKENDAPI}/ourdata`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  if (products.length === 0) {
    return <div class="flex items-center justify-center h-screen w-[80%]">
        <Loader />
      </div>;
  }



  return (
    <>
      <div className="bg-[color:var(--color2)] w-[85%]">
        <div className="container flex w-[75%] flex-col ml-auto mr-auto">
          <div className="text-center text-6xl font-bold p-10">
            <h1>Our Live Products</h1>
          </div>
          <div className="ml-auto mr-auto mt-10 w-[80%]">
            <div className="w-[100%] bg-gray-200 rounded-lg  grid grid-cols-6 gap-0 border-4 border-zinc-950">
              <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5  ">
                <h1>S. No.</h1>
              </div>
              <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5  ">
                <h1>Name</h1>
              </div>
              <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5 ">
                <h1>Price</h1>
              </div>
              <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5 ">
                <h1>Description</h1>
              </div>
              <div className="className=text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5  ">
                <h1>Image</h1>
              </div>
              <div className=" text-center text-2xl font-bold pt-3  pb-5 ">
                <h1>delete item</h1>
              </div>
            </div>
            <div>
              {products.map((product, index) => (
                <div>
                  {" "}
                  <div className="w-[100%] h-[80%]  rounded-lg  grid grid-cols-6 gap-0 border-4 border-zinc-950">
                    <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5  ">
                      <h1>{index + 1}</h1>
                    </div>
                    <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5  ">
                      <h1>{product.name} </h1>
                    </div>
                    <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5 ">
                      <h1>{product.price}</h1>
                    </div>
                    <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5 ">
                      <h1>{product.description}</h1>
                    </div>
                    <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5 ">
                      <h1>{product.image}</h1>
                    </div>

                    {/* {deletesubmit} */}
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;

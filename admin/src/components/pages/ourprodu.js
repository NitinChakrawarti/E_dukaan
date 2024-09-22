import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "./loader";

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  // calling data for 1st load ---------------------------------------------------------
  useEffect(() => {
    calldata()
  }, []);
  if (products.length === 0) {
    return <div className="flex items-center justify-center h-screen w-[80%]">
      <Loader />
    </div>;
  }

  // function to call data it will we called whenever we need to refresh our page 
  function calldata() {
    axios.get(`${process.env.REACT_APP_BACKENDAPI}/ourdata`).then((res) => {
      setProducts(res.data);
    });
  }

// function to delete data is here -------------------------------------------------------------
  function deleteproduct(id) {
    const _id = id
    try {
      axios.delete(`${process.env.REACT_APP_BACKENDAPI}/delete/${_id}`);
      alert("Item Deleted successfully")
      calldata()
    } catch (error) {
      console.error("There was an error in deleting the item!", error);
    }
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
                <h1>Details</h1>
              </div>
              <div className="text-center text-2xl font-bold pt-3 border-r-4 border-zinc-950 pb-5  ">
                <h1>Image</h1>
              </div>
              <div className=" text-center text-2xl font-bold pt-3  pb-5 ">
                <h1>Delete</h1>
              </div>
            </div>
            <div>
              {products.map((product, index) => (
                <div key={index}>
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
                    <div className="text-center text-xl font-bold pt-3  pb-5  cursor-pointer hover:text-red-700 duration-200 ">
                      <button onClick={() => deleteproduct(product._id)}>Delete</button>
                    </div>
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

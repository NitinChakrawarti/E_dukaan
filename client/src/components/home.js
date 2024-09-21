import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "./loader";

const Home = () => {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKENDAPI}/ourdata`)
      .then(response => {
        setdata(response.data);
      })
     
  }, []);

  if (datas.length === 0) {
    return <div className="relative z-10 w-full justify-center flex items-center h-[600px]">
     
     <Loader/>
    </div>;
  }

  return ( 
    <>
      
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {datas.map((data) => (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-full h-64 object-contain mb-4"
                  src={data.image}
                  alt={data.name}
                />
                <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
                <p className="text-gray-700 mb-4">{data.description}</p>
                <p className="text-lg font-bold">{data.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;




import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5190/ourdata")
      .then(response => {
        setdata(response.data);
      })
     
  }, []);

  if (datas.length === 0) {
    return <div>
      <h1> you encountered an error</h1>
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




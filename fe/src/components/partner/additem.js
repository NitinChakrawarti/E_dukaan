import React, { useState } from "react";
import axios from "axios";

const Additem = () => {
  const [name, setname] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  // const [image, setImageLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      name,
      // price,
      // description,
      // image,
    };
    try {
      await axios.post("http://localhost:5190/create", newItem);
      alert("Item added successfully");
      setname("");
      // setPrice("");
      // setDescription("");
      // setImageLink("");
    } catch (error) {
      console.error("There was an error adding the item!", error);
    }
    console.log(newItem);
  };

  return (
    <>
      <div className="bg-[color:var(--color2)] w-[85%]">
        <div className="w-[30%] h-[70%] ml-auto mr-auto mt-20 p-10 bg-slate-300 shadow-md rounded-lg border-black">
          <h2 className="text-2xl font-bold mb-6 text-center">Add New Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[color:var(--color6)] text-lg text-bold pb-2">Product Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                className="w-full px-3 py-1 border rounded-md"
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-[color:var(--color6)] text-lg text-bold pb-2">Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                // required
                className="w-full px-3 py-1 border rounded-md"
              />
            </div> */}
            {/* <div className="mb-4">
              <label className="block text-[color:var(--color6)] text-lg text-bold pb-2">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                // required
                className="w-full px-3 py-1 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[color:var(--color6)] text-lg text-bold pb-2">Image Link:</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImageLink(e.target.value)}
                // required
                className="w-full px-3 py-1 border rounded-md"
              />
            </div> */}
            <button
              type="submit"
              className="w-[70%] ml-16 text-lg bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Additem;

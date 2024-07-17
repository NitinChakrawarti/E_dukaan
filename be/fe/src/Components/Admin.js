import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [name, setname] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImageLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem ={
      name,
      price,
      description,
      image
    };
    try {
      await axios
      .post('http://localhost:5190/create', newItem);    
      alert('Item added successfully');
      setname('');
      setPrice('');
      setDescription('');
      setImageLink('');
    } 
    catch (error) {
      console.error('There was an error adding the item!', error);
    }
    console.log(newItem);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image Link:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImageLink(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Add Item</button>
      </form>
    </div>
  );
};

export default Admin;

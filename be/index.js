const express = require("express");
const getdata = require("./mongodb");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


// code for fetching data from mongodb


app.get("/ourdata", async (req, resp) => {
  let data = await getdata();
  data = await data.find({}).toArray();
  resp.send(data);
  console.log(data);
});

// code for inserting data into mongodb

mongoose.connect('mongodb://localhost:27017/Ecom')

//schema for products

const pschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const item = mongoose.model('products', pschema);

app.post("/create", async (req, resp) => {
  const { name, price, description, image } = req.body;
  const newItem = new item({
    name,
    price,
    description,
    image
  });

  try {
    const savedItem = await newItem.save();
    resp.status(201).json(savedItem);
  } catch (error) {
    resp.status(500).json({ message: 'Error saving item', error });
  }
});

app.listen(5190);

const dotenv = require("dotenv");

const express = require("express");
const getdata = require("./db/mongodb");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// env config file is here 

dotenv.config({ path: './config.env' });

require('./db/connection');

// port name from variable is here  
const PORT = process.env.PORT;

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


const pschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // price: {
  //   type: Number,
  //   required: true,
  // },
  // description: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  //   required: true,
  // },
});

const item = mongoose.model('products', pschema);

app.post("/create", async (req, resp) => {
  const { name, price, description, image } = req.body;
  const newItem = new item({
    name,
    // price,
    // description,
    // image
  });
  try {
    const savedItem = await newItem.save();
    resp.status(201).json(savedItem);
  } catch (error) {
    resp.status(500).json({ message: 'Error saving item', error });
  }
});

    // delete many code is here 

// const deldata = async () => {

//   let data = await getdata();
//   let result = await data.deleteOne({
//     name: "nitin"
//   })
//   console.log(result);
// }

// deldata();

app.listen(PORT);
console.log(`server is running at port no http://localhost:${PORT}/ourdata`);
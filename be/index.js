const dotenv = require("dotenv");
const express = require("express");
const getdata = require("./db/mongodb");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// schema imported here 
const addItem = require("./schemas/add")  // add schema 
// const deleteItem = require("./schemas/delete")  //  schema 

// env config file is here 

dotenv.config({ path: './config.env' });
require('./db/connection');

// port name from variable is here  
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// code for fetching data from mongodb------------------------------------------------

app.get("/ourdata", async (req, resp) => {
  let data = await getdata();
  data = await data.find({}).toArray();
  resp.send(data);
  // console.log(data);
});

// code for inserting data into mongodb----------------------------------------------------

app.post("/create", async (req, resp) => {
  const { name, price, description, image } = req.body;
  const newItem = new addItem({
    name,
    // price,
    // description,
    // image
  });
  console.log(newItem.name);

  try {
    const savedItem = await newItem.save();
    // console.log(savedItem);
    resp.status(201).json(savedItem);
  } catch (error) {
    resp.status(500).json({ message: 'Error saving item', error });
  }
});

// delete ONE code is here----------------------------------------------

app.delete("/delete/:_id", async (req, resp) => {
  const _id = req.params
  const idtopass = _id._id
  console.log(idtopass);
  const data = await getdata();
  try{
    const resultL = await data.deleteOne({
      _id: new mongoose.mongo.ObjectId(idtopass)
    });
    resp.send(resultL)
    console.log(resultL);
  } catch (error) {
    resp.status(500).json({ message: 'Error delete item', error });
  }
});

app.listen(PORT);
console.log(`server is running at port no http://localhost:${PORT}/ourdata`);
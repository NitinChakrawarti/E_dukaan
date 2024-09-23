const dotenv = require("dotenv");
const { MongoClient } = require('mongodb');
dotenv.config({path: './config.env'});
const db_connect = process.env.MONGODB_PRODUCTS_URL;
const client = new MongoClient(db_connect);
async function getdata (){
    let result = await client.connect();
    let db = result.db('ecom');
    let dbc = db.collection('products');
   return dbc;
}

module.exports = getdata;
 

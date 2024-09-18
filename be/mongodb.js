const { MongoClient } = require('mongodb');
const { default: mongoose } = require('mongoose');


// const url = 'mongodb://localhost:27017'; 
// const client = new MongoClient(url);

const db_connect = 'mongodb+srv://nitin04:atlasdb@ecom.pppii.mongodb.net/'

const client = new MongoClient(db_connect);

async function getdata (){
    
    let result = await client.connect();
    let db = result.db('test');
    let dbc = db.collection('products');
   return dbc;
}

module.exports = getdata;
 
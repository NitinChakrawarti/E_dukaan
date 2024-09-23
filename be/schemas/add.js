const mongoose = require("mongoose");
const addSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    }
}, { collection: 'products' });
const addItem = mongoose.model('products',addSchema);
module.exports = addItem;


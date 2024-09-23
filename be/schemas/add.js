const mongoose = require("mongoose");
const addSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    }
});
const addItem = mongoose.model('ecom',addSchema);
module.exports = addItem;


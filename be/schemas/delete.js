const mongoose = require("mongoose");
const delSchema = new mongoose.Schema({
    _id:{
        type: Object,
        required:false
    }
});
const deleteItem = mongoose.model('products',delSchema);
module.exports = deleteItem;


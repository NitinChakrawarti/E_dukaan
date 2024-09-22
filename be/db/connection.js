const mongoose = require("mongoose");
const db_connect = process.env.MONGODB_PRODUCTS_URL;
mongoose.connect(db_connect, {
    dbName: 'products'
})
    .then(() => {
        console.log("connected");
    }
    )
    .catch((err) => {
        console.log(`you got an error ${err}`);
    })



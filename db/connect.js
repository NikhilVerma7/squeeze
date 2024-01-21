const mongoose = require("mongoose");

async function connectToMongoDB(){
    // return mongoose.connect(url);
    mongoose.connect('mongodb://127.0.0.1:27017/shrinkIt'); 

}



module.exports = connectToMongoDB;
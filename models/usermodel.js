const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    shortURL: {
        type : String,
        requried: true,
        unique: true
    },

    actualURL:{
        type : String,
        required: true
    },

    visitHistory: [{ timestamp : {type: Number}}]
},{timestamps : true}) ;


const urll = new mongoose.model("urll",UserSchema);

module.exports ={urll};
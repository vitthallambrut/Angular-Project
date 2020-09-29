const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
    name:String,
    dob:String,
    address:String,
    height:Number,
    weight:Number,
    hobbies:Object
});


module.exports = mongoose.model("Details", detailsSchema);
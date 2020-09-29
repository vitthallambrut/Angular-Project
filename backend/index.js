const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//connect to db
mongoose.connect("mongodb://127.0.0.1/Details",{ useNewUrlParser: true, useUnifiedTopology: true } ,()=> console.log("connected to database"));

// import routes
const detailsRoutes = require("./routes/details");



//moddleware
app.use(express.json());
app.use(cors());

// route middleware
app.use("/api/details", detailsRoutes);





app.listen(4000, ()=> console.log("Server run on port number 4000!!!"));
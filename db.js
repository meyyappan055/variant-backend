const mongoose = require("mongoose");

const url = "mongodb://mongo:27017/gdscTask";

mongoose.connect(url);

const con = mongoose.connection;
con.on("connected",()=>{
    console.log("mongo db connection successful!");
})


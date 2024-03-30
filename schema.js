const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    size:{
        type : String,
        required : true,
        enum : ['S','M','L','s','m','l']
    },

    color:{
        type : String,
        required : true
    },
    
    material:{
        type : String,
        required : true
    }


});

module.exports = mongoose.model("variants",Schema)
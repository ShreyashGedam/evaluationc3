const mongoose = require("mongoose")

const publicschema = new mongoose.Schema({

    name : {type : String , required : true},
},
{
    timestamps : true , 
    versionKey : false
})

module.exports = mongoose.model("publication",publicschema)
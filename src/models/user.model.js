const mongoose = require("mongoose")

const userschema  = new mongoose.Schema({

    firstname : {type : String , required : true},
    lastname : {type : String },
    age : {type : Number , required : true},
    email : {type : String , required : true},
    profileimage : [{type : String , required : true}]
},
{
    timestamps : true,
    versionKey : false
})

module.exports = mongoose.model("user",userschema)
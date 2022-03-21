const mongoose = require("mongoose")

const bookschema = new mongoose.Schema({
    likes : {type : Number , required : true},
    coverimage : [{type : String , required : true}],
    content : {type : String , required : true},
},
{
    timestamps : true , 
    versionKey : false
})

module.exports = mongoose.model("book",bookschema)
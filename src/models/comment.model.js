const mongoose = require("mongoose")

const commentschema = new mongoose.Schema({

    body : {type : String , required : true},
},
{
    timestamps : true , 
    versionKey : false
})

module.exports = mongoose.model("comment",commentschema)
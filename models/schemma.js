const mongoose=require("mongoose");
const express=require("express")
const TodoSchemma=new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    des:{
        type:String,
        required:true,
    }
})



module.exports=TodoSchemma
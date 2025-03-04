const mongoose=require("mongoose")
const express=require("express")
const userSchema=mongoose.Schema({
    name:{
        required:true,
        type:String,
        min:3,
        max:10

    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:10

    },
    email:{
        required:true,
        type:String,
        min:3,
        max:10,
        unique:true


    }
})
module.exports=mongoose.model("user",userSchema)
require("dotenv").config()
const express=require('express')
const connection=async()=>{
    try {
        await mongoose.connect(process.env.Db_url)
        console.log("COnnected Successfully");
        
    } catch (error) {
        console.log("try again not connected");
        
    }
}
module.exports=connection
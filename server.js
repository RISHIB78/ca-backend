const express=require('express')
const mongoose=require('mongoose')
const datab=require("./data")
data()
const port=4000
const app=express()
require("dotenv").config({path:"process.db_url"})
app.listen(port=>{
    console.log(`My server is listening at http://localhost: ${port}`);
    
})

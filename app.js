const express=require('express')
const mongoose=require("mongoose")
const model=require('./schema')
const router=express.Router()
router.get('/user',async(req,res)=>{
    const user=req.body
    res.send("Welcome to backend Ca")
    
 try {
    await model.user
    
    
 } catch (error) {
    res.status(400).json("message:user not found")
 }
 router.post("/email",async(req,res)=>{
    const email=req.body
    if(!email){
        res.status(400).json({message:"email can not be empty"})
    }
    res.status("email found")
 })
})
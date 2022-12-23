const express = require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

require("dotenv").config()

import connection from "../../config/db";
import {userModel} from "../../models/User.model"

const app=express();

export default async function () {


app.use(express.json())

  appp.get("/",(req,res)=>{
    res.send("welcome")
}) 

app.post("/signup",async (req,res)=>{
    const {email,password,name,dob}=req.body
    console.log(req.body)
    const userPresent=await userModel.findOne({email})
    
    if(userPresent?.email){
        res.send("try loggin in")
    }
    else{
        try{
            bcrypt.hash(password, 5,async function(err, decodepassword) {
                // Store hash in your password DB.
                const User=new userModel({email,password:decodepassword,name,dob})
                await User.save()
                res.send("sign up successfully")
            });
            
        }
        catch(err){
            console.log(err)
            res.send("something wrong")
    
        }

    }
    
})


app.post("/login",async (req,res)=>{
    console.log(req.body) //this is data what we send
    const{email,password}=req.body
    try{
        const User=await userModel.find({email})
       

        console.log(hashed_password)
        
        
        if(User.length>0){
            const hashed_password=User[0].password
            bcrypt.compare(password, hashed_password, function(err, result) {
             if(result){
                const token = jwt.sign({"userID":User[0]._id}, 'secretkey');
                res.send({mesg:"Login successfull",token:token})
                console.log(token)
                console.log(User)

             }
             else{
                res.send("login failed")
            } 
            });
            
            
        }
        else{
            res.send("login failed")
        }
        
    }
    catch(err){
        console.log(err)

    }
})




app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connection to db cloud")


    }
    catch(err){
        console.log(err)

    }
    console.log("working on 8002")
})
}
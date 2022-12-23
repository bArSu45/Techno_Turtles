import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
   name:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true,
       unique:true
   } ,
   dob:{
    type:Date,
    required:true
    },
   password:{
       type:String,
       required:true
   }
}  
   )

const userModel = mongoose.models.User || mongoose.model('User',userSchema)

module.exports = {userModel}
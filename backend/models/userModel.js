import e from "express";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required:true,
        uniqur: true,
    },
    email:{
        type: String,
        required:true,
        uniqur: true,
    }, 
    password:{
        type: String,
        minLength:6,
        required: true,
    },
    profilePic:{
        type: String,
        default: "",
    },
    followers:{
        type:[string],
        default: [],
    },
    following:{
      type: [string],
      default: [],  
    },
    bio: {
        type: string,
        default: "",
    }
},{
  timestamps:true,
});

const User = mongoose.model('User', userSchema)

export default User;
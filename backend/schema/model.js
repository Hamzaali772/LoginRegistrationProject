import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    fname:{type:String,trim:true},
    lname:{type:String,trim:true},
    email:{type:String,unique: true,trim:true},
    password:{type:String},
    age:{type:String},
    gender:{type:String},
    qulification:{type:String},
    tc:{type:Boolean},
    rating:{type:Number},
    image:{type:String}
})
const userModel= mongoose.model("user",userSchema)
export default userModel
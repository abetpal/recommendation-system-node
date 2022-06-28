const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },address:{
        type:String,
        required:true
    },city:{
        type:String,
        required:true
    },state:{
        type:String,
        required:true
    },pincode:{
        type:String,
        required:true
    },contact_number:{
        type:String,
        required:true
    }
})

mongoose.model("User",userSchema)
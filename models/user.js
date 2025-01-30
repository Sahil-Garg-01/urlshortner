<<<<<<< HEAD
const mongoose=require("mongoose")

const us=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"NORMAL"
    }

},{timestamps:true});

const user=mongoose.model("user",us);
=======
const mongoose=require("mongoose")

const us=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }

},{timestamp:true});

const user=mongoose.model("user",us);
>>>>>>> 29ca8afc9e56bf81831b0044e73f7ea95e498753
module.exports=user;
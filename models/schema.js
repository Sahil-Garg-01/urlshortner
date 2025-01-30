<<<<<<< HEAD
const mongoose=require("mongoose")

const user1=new mongoose.Schema({
    shortId:{
        type: String,
        required:true,
        unique:true,
    },
    redirecturl:{
        type:String,
        required: true,
    },
    visithistory:[{ timestamp : { type : Number} }],
    
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

},
 { timestamps:true}

)
const user=mongoose.model("url",user1)

=======
const mongoose=require("mongoose")

const user1=new mongoose.Schema({
    shortId:{
        type: String,
        required:true,
        unique:true,
    },
    redirecturl:{
        type:String,
        required: true,
    },
    visithistory:[{ timestamp : { type : Number} }],
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

},
 { timestamps:true}

)
const user=mongoose.model("url",user1)

>>>>>>> 29ca8afc9e56bf81831b0044e73f7ea95e498753
module.exports=user;
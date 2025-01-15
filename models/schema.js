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

module.exports=user;
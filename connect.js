const mongoose=require("mongoose")

async function connection(url){
   return  mongoose.connect(url)
}


module.exports={
    connection,
}
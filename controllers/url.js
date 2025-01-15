const si= require("shortid")
const url=require("../models/schema")


async function handlegeneratenewshortid(req,res){
    const body=req.body
    if(!body){
        return res.status(400).json({msg:"error occur"})
    }
    const shortID=si()

    await url.create({
        shortId:shortID,
        redirecturl:body.url,
        visithistory:[],
        createdby:req.user._id
        })
    return res.render("home",
        {id:shortID})
}



async function handleurlinfo(req,res){
    const shortI=req.params.shortId;
    const result= await url.findOne({shortI}).exec();

    if (!result) {
        console.log('Request ShortId:', req.params.shortId);
        return res.status(404).json({ msg: "Short URL not found" });
    }


    return res.json({
        'totalclicks' : result.visithistory.length,
        'details' : result.visithistory,
    });
}




module.exports={
    handlegeneratenewshortid,
    handleurlinfo,
}

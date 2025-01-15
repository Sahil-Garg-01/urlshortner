const express=require("express")
const router=express.Router()
const everyurl=require("../models/schema")

router.get("/",async (req,res) => {

    if (!req.user) {return res.redirect("/login")}
    // console.log(req.user)

    const abc=await everyurl.find({ createdby : req.user._id })
    return res.render("home",{
        urls : abc
    })
})


router.get("/signup",async (req,res)=>{
    return res.render("signup")
})


router.get("/login",async (req,res)=>{
    return res.render("login")
})


module.exports=router;
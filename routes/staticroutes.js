const express=require("express")
const router=express.Router()
const everyurl=require("../models/schema")
const { checkforauthentication,restrictTo } = require("../middleware/auth")


router.get("/admin/urls",restrictTo(["ADMIN"]),async (req,res) => {

    const abc=await everyurl.find({ })
    return res.render("home",{
        urls : abc
    })
})


router.get("/",restrictTo(["NORMAL","ADMIN"]),async (req,res) => {

    // if (!req.user) {return res.redirect("/login")}
    // console.log(req.user)

    const abc=await everyurl.find({ createdby : req.user._id })
    return res.render("home",{
        urls : abc
    })
})


router.get("/signup",(req,res)=>{
    return res.render("signup")
})


router.get("/login",(req,res)=>{
    return res.render("login")
})


module.exports=router;
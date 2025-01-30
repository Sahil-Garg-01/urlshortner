const express=require("express")
const { handlesignup,handlelogin } = require("../controllers/user")
const router=express.Router()

router.post("/",handlesignup)
router.post("/login",handlelogin)

module.exports=router;
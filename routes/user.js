<<<<<<< HEAD
const express=require("express")
const { handlesignup,handlelogin } = require("../controllers/user")
const router=express.Router()

router.post("/",handlesignup)
router.post("/login",handlelogin)

=======
const express=require("express")
const { handlesignup,handlelogin } = require("../controllers/user")
const router=express.Router()

router.post("/",handlesignup)
router.post("/login",handlelogin)

>>>>>>> 29ca8afc9e56bf81831b0044e73f7ea95e498753
module.exports=router;
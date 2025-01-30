const express=require("express")

const {handlegeneratenewshortid,handleurlinfo,} = require("../controllers/url")

const router=express.Router()


router.post('/',handlegeneratenewshortid);
router.get('/info/:shortID',handleurlinfo);


module.exports =router;
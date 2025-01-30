<<<<<<< HEAD
const express=require("express")

const {handlegeneratenewshortid,handleurlinfo,} = require("../controllers/url")

const router=express.Router()


router.post('/',handlegeneratenewshortid);
router.get('/info/:shortID',handleurlinfo);


=======
const express=require("express")

const {handlegeneratenewshortid,handleurlinfo,} = require("../controllers/url")

const router=express.Router()


router.post('/',handlegeneratenewshortid);
router.get('/info/:shortID',handleurlinfo);


>>>>>>> 29ca8afc9e56bf81831b0044e73f7ea95e498753
module.exports =router;
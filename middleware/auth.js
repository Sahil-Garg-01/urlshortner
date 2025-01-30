<<<<<<< HEAD
const {getuser}=require('../service/auth')

function checkforauthentication(req,res,next){
    // const authorizationheadervalue=req.headers["authorization"]
    const tokencookie=req.cookies?.token
    req.user=null;

    if( !tokencookie ){
        return next();
    }

    // const token=authorizationheadervalue.split('bearer')[1]
    const token=tokencookie
    const User=getuser(token)
    req.user=User
    next();
}


function restrictTo(roles=[]){
    return function (req,res,next){

        if(!req.user) return res.redirect("/login")

        if(!roles.includes(req.user.role)) return res.end("unauthorised")

        return next();
    }

}

module.exports={
    checkforauthentication,
    restrictTo,
=======
const {getuser}=require("../service/auth")

async function restricttologgedinuseronly(req,res,next){
    const useruid=req.cookies?.uid;
    
    if(!useruid){
        return res.redirect("/login")
    }

    const user=getuser(useruid)
    if(!user) {return res.redirect("/login")}
    req.user=user
    next();
}


async function checkauth(req, res, next) {
    const userUid = req.cookies?.uid;
    console.log(userUid)
  
    const user = await getuser(userUid);
  
    req.user = user;
    // console.log(req.user)
    next();
  }



module.exports={
    restricttologgedinuseronly,
    checkauth,
>>>>>>> 29ca8afc9e56bf81831b0044e73f7ea95e498753
}
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
}
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
}
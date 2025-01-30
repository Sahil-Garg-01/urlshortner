// const sessionidmap= new Map();

// function setuser(id,user){
//     sessionidmap.set(id,user)
// }

const jwt=require("jsonwebtoken")
const secretkey="5c05ml"

function setuser(user){
    return jwt.sign(
        {
            _id:user._id,
            email:user.email,
            role:user.role,
    }
    ,secretkey)
}


function getuser(token){
    // return sessionidmap.get(id)
    if(!token) return null;
    try {
        return jwt.verify(token,secretkey)
    } catch (error) {
        return null
    }    
}


module.exports={
    setuser,
    getuser,
}
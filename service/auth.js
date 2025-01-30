<<<<<<< HEAD
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
=======
const sessionidmap= new Map();

async function setuser(id,user){
    sessionidmap.set(id,user)
}

async function getuser(id){
    sessionidmap.get(id)
}

module.exports={
    setuser,
    getuser,
>>>>>>> 29ca8afc9e56bf81831b0044e73f7ea95e498753
}
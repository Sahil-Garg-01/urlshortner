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
}
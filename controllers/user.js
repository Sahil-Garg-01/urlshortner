<<<<<<< HEAD
const { v4:uuidv4 } = require("uuid")
const User=require("../models/user")
const {setuser}=require("../service/auth")


async function handlesignup(req,res){
    const {name,email,password}=req.body
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect("/")
}


async function handlelogin(req,res){
    const {email,password}=req.body;
    const u = await User.findOne({
        email,
        password,
    });
    // console.log(u)

    if(!u) {
        return res.render("login",{
            "error":"incorrect Email or passwaord",
        });
    }
    // const sessionid=uuidv4();
    // console.log(sessionid)

    const token=setuser(u);
    res.cookie("token",token);
    return res.redirect("/");

    // return res.json(token);
}


module.exports={
    handlesignup,
    handlelogin,
=======
const { v4:uuidv4 } = require("uuid")
const User=require("../models/user")
const {setuser}=require("../service/auth")


async function handlesignup(req,res){
    const {name,email,password}=req.body
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect("/")
}


async function handlelogin(req,res){
    const {email,password}=req.body;
    const u = await User.findOne({
        email,
        password,
    });
    console.log(u)

    if(!u) {
        return res.render("login",{
            "error":"incorrect Email or passwaord",
        });
    }
    const sessionid=uuidv4();

    console.log(sessionid)

    setuser(sessionid,u);
    res.cookie("uid",sessionid);

    return res.redirect("/");
}


module.exports={
    handlesignup,
    handlelogin
>>>>>>> 29ca8afc9e56bf81831b0044e73f7ea95e498753
}
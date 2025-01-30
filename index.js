const express=require("express")
const cookieparser=require("cookie-parser")

const {connection} = require("./connect")
const { checkforauthentication,restrictTo } = require("./middleware/auth")
const url=require("./models/schema")
const path=require("path")

const sr=require("./routes/staticroutes")
const ur=require("./routes/user")
const urlroute=require("./routes/url")

const app=express();
const port=9010;


connection("mongodb://127.0.0.1:27017/short-urls").then(()=>console.log("mongodb connected"))


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieparser())
app.use(checkforauthentication)


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))


app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlroute)
app.use("/user",ur)
app.use("/",sr)


app.get("/wait/:shortID",async (req,res)=>{
    const shortId=req.params.shortID;
    const entry=await url.findOneAndUpdate( 
         {shortId} , {$push: {visithistory: {timestamp : Date.now()} } });
    return res.redirect(entry.redirecturl);
});


app.listen(port,()=>{console.log(`server activated at port ${port}`)});

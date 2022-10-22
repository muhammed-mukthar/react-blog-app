const express =require('express')
const app=express()
const dotenv=require('dotenv')
const logger=require('morgan')
const mongoose=require('mongoose')
const multer=require("multer")
const cors = require('cors')
dotenv.config()

const authroute=require('../api/routes/auth')
const userroute=require('../api/routes/users')
const  postroute=require('../api/routes/posts')
const categoryroute=require('../api/routes/categories')
app.use(express.json())

mongoose.connect(process.env.MONGO_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(console.log("connected to mongo")).catch((err)=> console.log(err,"not connected to mongo"))

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,"31w.jpeg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})

app.use(logger("dev"));
app.use(cors())

app.use("/api/auth",authroute)
app.use("/api/users",userroute)
app.use("/api/posts",postroute)
app.use("/api/categories",categoryroute)

app.listen("5000",()=>{
    console.log("Backend  on port 5000");
})
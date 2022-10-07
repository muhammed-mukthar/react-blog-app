const express =require('express')
const app=express()
const dotenv=require('dotenv')
const logger=require('morgan')
const mongoose=require('mongoose')
dotenv.config()
app.use(express.json())
app.use(logger("dev"));
const authroute=require('../api/routes/auth')
const userroute=require('../api/routes/users')
const  postroute=require('../api/routes/posts')
const categoryroute=require('../api/routes/categories')
app.use("/api/auth",authroute)
app.use("/api/users",userroute)
app.use("/api/posts",postroute)
app.use("/api/categories",categoryroute)
mongoose.connect(process.env.MONGO_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(console.log("connected to mongo")).catch((err)=> console.log(err,"not connected to mongo"))




app.listen("5000",()=>{
    console.log("Backend  on port 5000");
})
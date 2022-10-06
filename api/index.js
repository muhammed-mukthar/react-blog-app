const express =require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()



mongoose.connect(process.env.MONGO_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(console.log("connected to mongo")).catch((err)=> console.log(err,"not connected to mongo"))

app.listen("5000",()=>{
    console.log("Backend  on port 5000");
})
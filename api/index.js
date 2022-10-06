const express =require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()
app.use(express.json())
const authroute=require('../api/routes/auth')

mongoose.connect(process.env.MONGO_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(console.log("connected to mongo")).catch((err)=> console.log(err,"not connected to mongo"))

app.use("/api/auth",authroute)


app.listen("5000",()=>{
    console.log("Backend  on port 5000");
})
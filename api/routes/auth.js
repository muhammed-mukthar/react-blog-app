const router=require('express').Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
/* -------------------------------- Register -------------------------------- */

router.post('/register',async(req,res)=>{
   try{
    
  const  {username,email,password} =  req.body
  const salt=await bcrypt.genSalt(10)
    const hashedPass=await bcrypt.hash(password,salt)
    console.log(req.body);
  const newUser=new User({
    username:username,
    email:email,
    password:hashedPass
  })
  console.log(newUser);
  const user=await newUser.save()
  console.log("hello");
  res.status(200).json(user)
   }catch(err){
    res.status(500).json(err)
   }
})

/* ---------------------------------- Login --------------------------------- */


module.exports=router
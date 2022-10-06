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

router.post('/login',async(req,res)=>{
    try{
       
      let {username,password}=req.body
    let user=await User.findOne({username:username})
    if(user){
        let verifypassword=await bcrypt.compare(password,user.password)
        if(verifypassword){
            let {password,...others}=user._doc
            res.status(200).json(others)
        }else{
            res.status(500).json("invalid credentials")
        }

    }else{
        res.status(500).json("invalid credentials")
    }
        
        

    }catch(err){
        res.status(500).json(err)


    }
})

module.exports=router
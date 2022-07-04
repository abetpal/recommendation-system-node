const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt =require('bcryptjs');

// Todo: Complete Signup

router.post("/signup", (req, res) => {
        const {first_name,last_name,email, password,username,address,city,state,pincode,contact_number } = req.body;
        //console.log(req.body);
        if (!first_name || !last_name || !email || !password || !username || !address || !city || !state ||!pincode ||!contact_number) {
          return res.status(422).json({ error: "please add all the fields" });
        }
        User.findOne({ email: email })
          .then((savedUser) => {
            if (savedUser) {
              return res .status(422).json({ error: "user already exists with that email" });
            }
            bcrypt.hash(password,14)
              .then(hashedpassword=>{
                  const user = new User({
                    first_name,
                    last_name,
                    email,
                    password:hashedpassword,
                    username,
                    address,
                    city,
                    state,
                    pincode,
                    contact_number,
                  });
                  user.save()
                    .then((user) => {
                      res.json({ message: "saved successfully" });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
            })
          })
          .catch((err) => {
            console.log(err);
          });
});



// Todo:Complete Signin
router.post('/signin',(req,res)=>{
  const {email,password}=req.body
  if(!email || !password){
      res.status(422).json({error:"please add email or password"})
  }
 User.findOne({email:email})
 .then(savedUser=>{
     if(!savedUser){
         return res.status(422).json({error:"Invalid Email or Password"})
     }
     bcrypt.compare(password,savedUser.password)
     .then(doMatch=>{
         if(doMatch){
             res.json({message:"successfully signed in"})
            //  const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
            //  res.json({token})
         }
         else{
             return res.status(422).json({error:"Invalid Email or Password"})
         }
     })
     .catch(err=>{
         console.log(err)
     })
 })
})

module.exports = router;

const mongoose = require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const jwt=require('jsonwebtoken');

const JWT_Secret="hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe"; 

mongoose.connect("mongodb+srv://databaseforgym:RedBullGym@gym.lzqsjcy.mongodb.net/",{
    useNewUrlParser:true,
})
.then(()=>{
    console.log("Connected to Database");
})
.catch((error)=>console.log(error));

require("./userDetails");
const User = mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{
    const {fname,lname,email,password} = req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
            alert("User with email already exists!");
            return res.send({error:"User with email already exists!"});
        }
        await User.create({
            fname,
            lname,
            email, 
            password:encryptedPassword,
        });
        res.send({staus:"Ok"});
    }catch(error){
        res.send({staus:"error"});
    }
})

app.post("/login-user",async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.send({error:"User Not Found"});
    }
    if(await bcrypt.compare(password,user.password)){
        const token=jwt.sign({email:user.email},JWT_Secret);
        if(res.status(201)){
            return res.json({status:"Ok",data:token});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({status:"error",error:"Invalid Password"});
});

app.post("/userData",async(req,res)=>{
    const {token} = req.body;
try{
    const user = jwt.verify(token,JWT_Secret);
    const useremail=user.email;
    User.findOne({email:useremail})
    .then((data)=>{
        res.send({staus:"Ok",data:data});
    })
    .catch((error)=>{
        res.send({status:"error",data:error});
    });
}catch(error){
    console.log(error);
}
})
app.listen(5000,()=>{
    console.log("Server is Started");
})

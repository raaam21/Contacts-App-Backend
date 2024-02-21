

const bcrypt = require("bcrypt");

const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");

// @desc Register User
// @route Get /api/users
// @access public  

const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body;

    if (!username || !password || !email){
        res.status(404);
        throw new Error("All fields Required");
    }

    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(404);
        throw new Error("User Registered")
    }

    // hashing of password
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });

    console.log(`New User ${user}`);

    if(user){
        res.status(201).json(user);
    }else{
        res.status(400);
        throw new Error("Not Valid Data");
    }
});


// @desc Login User
// @route Get /api/users
// @access public  

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const user = await User.findOne({email});

    // comparison

    if(user && bcrypt.compare(password,user.password)){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"1m"}
        );
        res.status(200).json({accessToken});

    }else{
        res.status(401)
        throw new Error("Wrong Credentials!");
    }
});


// @desc User Infp
// @route Get /api/users
// @access private 

const currentUser = asyncHandler(async (req,res)=>{
    res.json({message:"Current info user"});
});





module.exports = {registerUser , loginUser , currentUser};
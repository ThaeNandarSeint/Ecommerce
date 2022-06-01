const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const signup = async (req, res, next)=>{
    const { name, email, password } = req.body;
    let existingUser;

    try{
        existingUser = await User.findOne({email: email})
    }catch(err){
        console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message: "User already exits! Login instead!"})
    }

    const hashedPassword = bcrypt.hashSync(password)

    const user = new User({
        name,
        email,
        password: hashedPassword
    })

    try{
        await user.save();
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({admin: user});
}

const login = async (req, res, next)=>{
    const { email, password } = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email: email})
    }catch(err){
        return new Error(err);
    }

    if(!existingUser){
        return res.status(400).json({message: "User does not exit. Sign up please"})
    }

    const isCorrectPassword = bcrypt.compareSync(password, existingUser.password);

    if(!isCorrectPassword){
        return res.status(400).json({message: "Invalid Email or Password"})
    }

    //generate token
    const token = jwt.sign({
        id: existingUser.id,
    }, JWT_SECRET_KEY, {
        expiresIn: "24h"
    })

    // create cookie
    res.cookie(String(existingUser._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000*3600*24),
        httpOnly: true,
        sameSite: 'lax'
    })

    return res.status(200).json({message: "Successfully login", admin: existingUser, token})    
}

// verify token
const verifyToken = async (req, res, next)=>{
    // get token from cookie
    const cookie = req.headers.cookie;
    const token = cookie.split("=")[1];
    
    /* get token from headers */

    // const headers = req.headers['authorization']
    // const token = headers.split(" ")[1]

    if(!token){
        res.status(404).json({message: "No Token Found"})
    }
    jwt.verify(String(token), JWT_SECRET_KEY,(err, user)=>{
        if(err){
            return res.status(400).json({message: "Invalid Token"})
        }
        console.log(user);
        req.id = user.id
    })
    next();
}

// get user information from id
const getUser = async (req,res,next)=>{
    const userId = req.id;
    let user;
    try{
        user = await User.findById(userId,"-password")
    }catch(err){
        return new Error(err);
    }

    if(!user){
        return res.status(404).json({message: "User not found"})
    }

    return res.status(200).json({user})
}

// logout
const logout = (req, res, next)=>{
    const cookie = req.headers.cookie;
    const token = cookie.split("=")[1];
    if(!token){
        res.status(404).json({message: "No Token Found"})
    }
    jwt.verify(String(token), JWT_SECRET_KEY,(err, user)=>{
        if(err){
            return res.status(400).json({message: "Invalid Token"})
        }
        res.clearCookie(`${user.id}`)
        req.cookies[`${user.id}`] =  "";

        return res.status(200).json({message: "Successfully logged out"})
    })
}

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser
exports.logout = logout;
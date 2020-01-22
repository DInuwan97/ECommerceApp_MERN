const express = require('express');
const usersRoute = express.Router();
const cors = require('cors'); 

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

process.env.SECRET_KEY = 'secret';
usersRoute.use(cors());

usersRoute.route('/register').post(async function(req,res){

    const today = new Date();
    const userData = {

        full_name : req.body.full_name,
        email:req.body.email,
        mobile:req.body.mobile,
        userType:req.body.userType,
        password:req.body.password,
        date:today
    }

    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash) =>{
                userData.password = hash
                User.create(userData)
                .then(user =>{
                    res.json({status:user.full_name+ " registered"})
                })
                .catch(err =>{
                    res.send("error" +err);
                })
            })
        }else{
            res.json({error:"User already registred"})
        }
    })
    .catch(err =>{
        res.send("error" +err);
    })
});



usersRoute.route('/login').post(async function(req,res){
    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload={
                    _id:user._id,
                    full_name:user.full_name,
                    email:user.email,
                    mobile:user.mobile,
                    userType:user.userType
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.send(token)
            }else{
                res.json({error:"User does not exsist in the system"})
            }
        }else{
            res.json({error:"User does not exsist in the system"})
        }
    })
    .catch(err =>{
        res.send("error" +err);
    })
});

module.exports = usersRoute;
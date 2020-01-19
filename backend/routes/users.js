var express = require('express')
const router = express.Router()

const UserDB = require('../models/users.js')
const ChatDB = require('../models/chats.js')
router.post('/signup', async (req,res)=>{
  try{
    const user = await UserDB.create({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      username:req.body.username,
      password:req.body.password,
      email:req.body.email
    })
    const chat = await ChatDB.create({
      chatname:user.firstName,
      users:[user],
      messages:[]
    })
    await user.update({chats:[chat]})
    return res.status(201).json({message:"Successfully created new user:" + user._id})

  }catch(e){
    return res.status(500).json({error:"Failed to create a user"})
  }



})

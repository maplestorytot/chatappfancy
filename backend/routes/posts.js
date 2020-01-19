var express = require('express')
const router = express.Router()

const UserDB = require('../models/users.js')
const PostDB = require('../models/posts.js')

router.post('/create_post', async(req, res) => {
  try{
    const newpost = await NotificationDB.create({
      user_id:req.body.userId,
      datetime: req.body.dateTime,
      content: req.body.postContent,
      comments: []
    })

    //also need to add it to the person's posts array
    UserDB.findOneAndUpdate(
     { _id: req.body.userId },
     { $push: { posts: {post_id: newpost._id} } },
     function (error, success) {
          if (error) {
              console.log(error);
          } else {
              console.log(success);
          }
      });


  } catch(e){
    return res.status(500).json({error : "failed to create a post"})
  }
})

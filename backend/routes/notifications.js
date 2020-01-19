var express = require('express')
const router = express.Router()

const UserDB = require('../models/users.js')
const NotificationDB = require('../models/notifications.js')

router.post('/create_notification', async(req, res) => {
  try{
    const notif = await NotificationDB.create({
      from_id:req.body.fromId,
      receive_id: req.body.receiveId,

      datetime: req.body.dateTime,
      content: req.body.notificationContent,
      noitificationType:req.body.notificationType
    })

    //also need to add it to the person's notifs array
    const user;

  } catch(e){
    return res.status(500).json({error : "failed to create a notif"})
  }
})

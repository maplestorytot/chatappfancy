const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    email: { type: String, unique: true },
    friends:[{
        user_id:{type:mongoose.Schema.Types.ObjectId,required:true, ref:'User'},
        firstName:{type:String, required:true},
        lastName: {type:String, required:true}
    }],
    notifications:[{
        notification_id:{type:mongoose.Schema.Types.ObjectId, ref:'Notification'},
        read:Boolean
    }],
    posts:[{
        post_id:{type:mongoose.Schema.Types.ObjectId, ref:'Post'}
        // add more later
    }],
    chats:[{
        chat_id:{type:mongoose.Schema.Types.ObjectId, ref:'Chat'},
        chatname:String
    }]
});


//first is name of model, second is schema
module.exports=mongoose.model('User',userSchema);

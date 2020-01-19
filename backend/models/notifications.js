const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    from_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receive_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    datetime: Date,
    content: String,
    noitificationType:String

});


//first is name of model, second is schema
module.exports = mongoose.model('Notification', notificationSchema);

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    datetime: Date,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    comments: [{
      user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      datetime: Date,
      content: String
    }]
});


//first is name of model, second is schema
module.exports = mongoose.model('Post', postSchema);

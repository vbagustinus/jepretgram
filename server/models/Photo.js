var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema({
  caption:  String,
  url: String,
  like: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Photo', photoSchema);
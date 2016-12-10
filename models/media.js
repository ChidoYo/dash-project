var mongoose = require('mongoose');
var Schema = mongoose.Schema

var  = new Schema({
  url: String,
  title: String,
  directory: String,
  updatedAt: Date
});

module.exports = mongoose.model('Media', Media );

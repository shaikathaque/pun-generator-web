var db = require('../config');
var mongoose = require('mongoose');

var punSchema = mongoose.Schema({
  question: String,
  answer: String
});

var Pun = mongoose.model('Pun', punSchema);

module.exports = Pun;
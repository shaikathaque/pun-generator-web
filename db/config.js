var mongoose = require('mongoose');

// mongoose.connect('mongo://localhost/pun-generator-db');
// var db = mongoose.connection;

mongoURI = 'mongodb://localhost/pun-generator-db';
mongoose.connect(mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error'));

db.once('open', function() {
  console.log('Mongodb connection open.');
});

module.exports = db;
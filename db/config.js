var mongoose = require('mongoose');

if (process.env.MONGODB_URI) {
  mongoURI = process.env.MONGODB_URI;
} else {
  mongoURI = 'mongodb://localhost/pun-generator-db';
}

mongoose.connect(mongoURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', function() {
  console.log('Mongodb connection open.');
});
module.exports = db;
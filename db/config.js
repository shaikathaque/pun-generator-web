var mongoose = require('mongoose');

// mongoose.connect('mongo://localhost/pun-generator-db');
// var db = mongoose.connection;

//mongodb://heroku_0nz2bvfs:o2a45s05k6c8jtbovq7h9ghekc@ds135983.mlab.com:35983/heroku_0nz2bvfs
// mongoURI = 'mongodb://localhost/pun-generator-db';
mongoURI = 'mongodb://heroku_0nz2bvfs:o2a45s05k6c8jtbovq7h9ghekc@ds135983.mlab.com:35983/heroku_0nz2bvfs';

mongoose.connect(mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error'));

db.once('open', function() {
  console.log('Mongodb connection open.');
});

module.exports = db;
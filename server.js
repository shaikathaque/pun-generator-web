const request = require('request');
const express = require('express');
const bodyParser = require('body-parser')

const db = require('./db/config');
const Pun = require('./db/model/pun');

const app = express();

app.listen(process.env.PORT || 8000, function() {
  console.log('Pun Generator listening haha');
});

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/build'));

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

 app.all('/pun', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res) {
  // res.redirect('/pun');
  console.log('hello');
});

app.get('/pun', function(req, res) {

  Pun.find({}).exec(function(err, puns) {
    if (err) {
      res.sendStatus(404);
    } else {
      var randomPun = puns[getRandomInt(puns.length)];
      res.send(randomPun);
    }
  });

});

app.post('/submitPun', function(req, res) {

  var newQuestion = req.body.question;
  var newAnswer = req.body.answer;

  var newPun = new Pun({
    question: newQuestion,
    answer: newAnswer
  });

  newPun.save(function(err, pun) {
    if (err) {
      console.log(err);
    } else {
      console.log(pun);
      res.send(pun);
    }
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



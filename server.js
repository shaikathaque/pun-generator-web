const request = require('request');
const express = require('express');
const bodyParser = require('body-parser')

const db = require('./db/config');
const Pun = require('./db/model/pun');

const app = express();

app.listen(process.env.PORT || 8080, function() {
  console.log('Pun Generator listening');
});

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.redirect('/pun');
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



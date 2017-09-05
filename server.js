const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan'); 

const db = require('./db/config');
const Pun = require('./db/model/pun');
const routes = require('./server/routes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan('tiny'));

app.listen(PORT, function() {
  console.log('Pun Generator listening on port:', PORT);
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/pun', routes.getPuns);

app.post('/pun', function(req, res) {
  let newQuestion = req.body.question;
  let newAnswer = req.body.answer;

  let newPun = new Pun({
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

//TODO remove
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



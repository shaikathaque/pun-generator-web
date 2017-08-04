const express = require('express');
const app = express();

var puns = [{question: 'Why can\'t bicycles stand up on their own?', answer: 'because they are two tired.'},
            {question: 'Who makes the most comfortable shoes?', answer: 'softwear developers'},
            {question: 'What did the mother tomato say to its child?', answer: 'ketchup!'}];

app.listen(8080, function() {
  console.log('Pun Generator listening on port: 8080');
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/pun', function(req, res) {
  var pun = puns[getRandomInt(puns.length)]
  res.send(pun);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



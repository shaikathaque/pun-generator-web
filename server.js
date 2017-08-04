const express = require('express');
const app = express();

var puns = [{question: 'Why can\'t bicycles stand up on their own?', answer: 'because they are two tired.'},
            {question: 'Who makes the most comfortable shoes?', answer: 'softwear developers.'},
            {question: 'What did the mother tomato say to its child?', answer: 'ketchup!'},
            {question: 'What do you call a cow with no legs?', answer: 'ground beef.'},
            {question: 'Why did the tomato blush?', answer: 'because it saw the salad dressing.'},
            {question: 'Why doesn\'t the sun go to college?', answer: 'because it already has 38 million degrees.'},
            {question: 'Why did the tomato blush?', answer: 'because it saw the salad dressing.'},
            {question: 'What do you call a beef that twitches?', answer: 'beef jerky.'},
            {question: 'What do you call a pig that does karate?', answer: 'pork chop.'},
            {question: 'Why did Santa go to college for music?', answer: 'to improve his wrapping skills.'},
            {question: 'What did the duck say to the drug dealer?', answer: 'want some quack?'}];


app.listen(process.env.PORT || 8080, function() {
  console.log('Pun Generator listening');
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



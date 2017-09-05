const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan'); 
const routes = require('./server/routes');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/pun', routes.getPun);
app.post('/pun', routes.addPun);

app.listen(PORT, function() {
  console.log('Pun Generator listening on port:', PORT);
});

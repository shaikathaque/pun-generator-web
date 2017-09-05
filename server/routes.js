const db = require('../db/config');
const Pun = require('../db/model/pun');

// helper function
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const routes = {
	getPun: (req, res) => {
		Pun.find({}).exec(function(err, puns) {
			if (err) {
				res.sendStatus(404);
			} else {
				console.log('from routes.js')
				var randomPun = puns[getRandomInt(puns.length)];
				res.send(randomPun);
			}
		});
	},
	
	addPun: (req, res) => {
		console.log('addPun from routes.js');
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
	}
}

module.exports = routes;

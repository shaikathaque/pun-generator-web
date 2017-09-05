const db = require('../db/config');
const Pun = require('../db/model/pun');

// helper function
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const routes = {
	getPun: (req, res) => {
		Pun.find({}).exec()
			.then( (puns) => {
				console.log('from routes.js')
				var randomPun = puns[getRandomInt(puns.length)];
				res.send(randomPun);
			})
			.catch( (err) => {
				res.sendStatus(404);
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
	
		newPun.save()
			.then( (pun) => res.send(pun))
			.catch(console.error);
	}
}

module.exports = routes;

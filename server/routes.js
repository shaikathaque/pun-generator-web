const db = require('../db/config');
const Pun = require('../db/model/pun');

// helper function
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const routes = {
	getPuns: (req, res) => {
		Pun.find({}).exec(function(err, puns) {
			if (err) {
				res.sendStatus(404);
			} else {
				console.log('from routes.js')
				var randomPun = puns[getRandomInt(puns.length)];
				res.send(randomPun);
			}
		});
	}
}

module.exports = routes;

var prices = require('./prices.json');

var getQuote = function(code) {
	var rate = prices[code];
	var modifier = Math.random();
	return rate + modifier;
};

var getUpdates = function(code, callback) {
	var id = setInterval(function() {
		var quote = getQuote(code);
		callback(quote);
	}, 1000);
	return id;
};

module.exports.getQuote = getQuote;
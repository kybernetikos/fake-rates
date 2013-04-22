var seedPrices = require('./prices.json');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var updateCurrencyPairAtInterval = function(currencyPair, seedPrice, spread) {
	setTimeout(function() {
		setInterval(function() {			
			var price = seedPrice + (Math.random() - 0.5)/1000;
			var bid = price - spread / 2;
			var offer = price + spread / 2;

			bid =  Math.floor(bid * 1000000) / 1000000;
			offer = Math.floor(offer * 1000000) / 1000000;
			
			var event = {
				'currencyPair' : currencyPair,
				'bid':bid,
				'offer':offer
			}

			eventEmitter.emit(currencyPair, event);
			eventEmitter.emit('all', event);
		}, Math.floor(Math.random() * 10) + 1000);
	}, Math.floor(Math.random() * 5000));
}

for(var currencyPair in seedPrices) {
	var seedPrice = seedPrices[currencyPair];
	var pointOnePercent = (seedPrice) / 1000;
	updateCurrencyPairAtInterval(currencyPair, seedPrice, pointOnePercent);
}

module.exports = eventEmitter;

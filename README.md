rates = require('fake-rates');

rates.on('all', function(event) {
  console.log(event);
});

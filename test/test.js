var assert = require('assert');
var money = require('../index.js');
describe('getQuote()', function(){
    it('should return something', function(){
      assert( money.getQuote('USDVND') > 100 );
    })
})
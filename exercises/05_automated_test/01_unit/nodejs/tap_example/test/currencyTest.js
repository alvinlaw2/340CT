
var tap = require('tap')
var currency = require('../modules/currency.js')

currency.convert('GBP', 'USD', 100, data => {
	tap.equal(data, 131.88)
	tap.end()
})

tap.test('a child test', childTest => {
	currency.convert('GBP', 'USD', 100, data => {
		childTest.equal(data, 131.88)
		childTest.end()
	})
})

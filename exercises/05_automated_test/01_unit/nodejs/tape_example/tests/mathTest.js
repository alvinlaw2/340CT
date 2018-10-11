
var test = require('tape')

const math = require('../modules/math.js')

test('should identify an odd number', (t) => {
	t.equal(math(1), 'odd', 'checking for an odd number')
	t.end()
})

test('should identify an even number', (t) => {
	t.equal(math(2), 'even', 'checking for an even number')
	t.end()
})


'use strict'

const math = require('../modules/math.js')

describe('testing math module', () => {
	it('should identify an odd number', () => {
		expect(math(1)).toBe('odd')
	})
	it('should identify an even number', () => {
		expect(math(2)).toBe('even')
	})
})

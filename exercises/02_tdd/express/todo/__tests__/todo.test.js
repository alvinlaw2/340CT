
'use strict'

/* eslint-disable no-magic-numbers */

const todo = require('../modules/todo')

describe('add', () => {

	//beforeEach( () => todo.add('bread', 1))
	afterEach( () => todo.clear())

	test('check there is a single item', done => {
		expect.assertions(1)
		todo.add('bread', 1)
		const items = todo.getAll()
		expect(items.length).toBe(1)
		done()
	})

	test('adding a single item', () => {
		expect.assertions(1)
		todo.add('bread', 1)
		const items = todo.getAll()
		expect(items.length).toBe(1)
	})

})

describe('clear', () => {

	test('clear list with items', () => {
		expect.assertions(2)
		try {
			todo.add('bread', 1)
			todo.add('butter', 2)
			const data = todo.getAll()
			expect(data.length).toBe(2)
			todo.clear()
			todo.getAll()
		} catch(err) {
			expect(err.message).toBe('empty list')
		}
	})

	test('clearing empty list should throw error', () => {
		expect.assertions(1)
		try {
			todo.clear()
		} catch(err) {
			expect(err.message).toBe('trying to clear empty list')
		}
	})

})

describe('getAll', () => {

	test('retrieving a single item', () => {
		expect.assertions(2)
		todo.add('bread', 1)
		const items = todo.getAll()
		expect(Array.isArray(items)).toBeTruthy()
		expect(items.length).toBe(1)
	})

	test('retrieving empty list should throw an error', () => {
		expect.assertions(1)
		try {
			todo.clear()
			todo.getAll()
		} catch(err) {
			expect(err.message).toBe('empty list')
		}
	})

})

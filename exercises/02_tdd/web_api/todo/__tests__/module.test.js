
'use strict'

/* eslint-disable no-magic-numbers */

const list = require('../module.js')

describe('add', () => {

	test('adding a valid item', done => {
		expect.assertions(1)
		const request = {body: { item: 'bread', qty: 5 }}
		const data = list.add(request)
		expect(data.item).toBe('bread')
		done()
	})

})

describe('getResource', () => {

	beforeEach( () => list.clear())

	test('existing single item', done => {
		expect.assertions(2)
		const request = {body: { item: 'bread', qty: 5 }}
		list.add(request)
		const data = list.getResource('bread')
		expect(data.item).toBe('bread')
		expect(data.qty).toBe(5)
		done()
	})

	test('item not in the list', () => {
		expect.assertions(1)
		try {
			const request = {body: { item: 'bread', qty: 5 }}
			list.add(request)
			list.getResource('butter')
		} catch(err) {
			expect(err.message).toBe('item not found')
		}
	})
})

describe('getAll', () => {

	beforeEach( () => list.clear())

	test('retrieving one item', done => {
		expect.assertions(3)
		list.clear()
		const request = {body: { item: 'bread', qty: 5 }}
		list.add(request)
		const data = list.getAll()
		expect(Array.isArray(data)).toBeTruthy()
		expect(data.length).toBe(1)
		expect(data[0].item).toBe('bread')
		done()
	})

})

describe('remove', () => {

	beforeEach( () => list.clear())

	test('remove item from list', done => {
		expect.assertions(2)
		list.add({body: { item: 'bread', qty: 5 }})
		list.add({body: { item: 'butter', qty: 3 }})
		const data = list.remove('bread')
		expect(data.item).toBe('bread')
		const items = list.getAll()
		expect(items.length).toBe(1)
		done()
	})

	test('remove item that does not exist', () => {
		expect.assertions(1)
		try {
			list.add({body: { item: 'bread', qty: 5 }})
			list.remove('butter')
		} catch(err) {
			expect(err.message).toBe('item not found')
		}
	})

})

describe('extractBodyData', () => {

	test('extracts all fields', done => {
		expect.assertions(1)
		const request = {body: { item: 'bread', qty: 5 }}
		const data = list.extractBodyData(request)
		expect(data.item).toBe('bread')
		done()
	})

})

describe('clear', () => {

	test('clears a list containing one item', done => {
		expect.assertions(1)
		const request = {body: { item: 'bread', qty: 5 }}
		list.add(request)
		list.clear()
		const data = list.getAll()
		expect(data.length).toBe(0)
		done()
	})

})

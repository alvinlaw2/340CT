
'use strict'

const request = require('../modules/request.js')

describe('request module', () => {
	describe('getParameter', () => {

		it('should extract valid parameter', () => {
			try {
				const req = {params: {param1: 'hello'}}
				const param = request.getParameter(req, 'param1')
				expect(param).toBe('hello')
			} catch(err) {
				expect(1).toBe(0) // this should never run!
			}
		})

		it('should throw error if param is missing', () => {
			try {
				const req = {params: {param2: 'hello'}}
				request.getParameter(req, 'param1')
				expect(1).toBe(0)
			} catch(err) {
				expect(err.message).toBe('parameter param1 missing')
			}
		})
	})
	describe('extractBodyKey', () => {
		it('should extract valid body key', () => {
			try {
				const req = {body: {key1: 'hello'}}
				const key = request.extractBodyKey(req, 'key1')
				expect(key).toBe('hello')
			} catch(err) {
				expect(1).toBe(0) // this should never run!
			}
		})

		it('should throw error if key is missing', () => {
			try {
				const req = {body: {key2: 'hello'}}
				request.extractBodyKey(req, 'key1')
				expect(1).toBe(0) // this should never run!
			} catch(err) {
				expect(err.message).toBe('missing key key1 in request body')
			}
		})
	})
})

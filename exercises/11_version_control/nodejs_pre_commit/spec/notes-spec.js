
'use strict'

const notes = require('../modules/notes.js')

describe('notes module', () => {

	describe('add', () => {

		beforeEach( () => {
			console.log('clearing notes')
			notes.clear()
		})

		it('should be able to add a valid note', () => {
			try {
				expect(notes.count()).toBe(0)
				notes.add({title: 'Hello', text: 'World'})
				expect(notes.count()).toBe(1)
			} catch(err) {
				expect(1).toBe(0) // this should never run!
			}
		})

		it('should throw error if title missing', () => {
			try {
				expect(notes.count()).toBe(0)
				notes.add({text: 'Hello'})
				expect(1).toBe(0)
			} catch(err) {
				expect(notes.count()).toBe(0)
				expect(err.message).toBe('invalid note')
			}
		})

		it('should throw error if text missing', () => {
			try {
				expect(notes.count()).toBe(0)
				notes.add({title: 'Hello'})
				expect(1).toBe(0)
			} catch(err) {
				expect(notes.count()).toBe(0)
				expect(err.message).toBe('invalid note')
			}
		})

	})

	describe('get', () => {

		beforeEach( () => {
			notes.clear()
			notes.add({title: 'Hello', text: 'World'})
		})

		it('should retrieve a single note', () => {
			try {
				expect(notes.count()).toBe(1)
				const note = notes.get(0)
				expect(note.title).toBe('Hello')
				expect(note.text).toBe('World')
			} catch(err) {
				expect(1).toBe(0) // this should never run!
			}
		})

		it('should reject a negative index', () => {
			try {
				expect(notes.count()).toBe(1)
				notes.get(-1)
				expect(1).toBe(0)
			} catch(err) {
				expect(err.message).toBe('no note at index -1')
			}
		})

	})

	describe('delete', () => {

		beforeEach( () => {
			notes.clear()
			notes.add({title: 'Hello', text: 'World'})
			notes.add({title: 'Note Two', text: 'text for note two'})
		})

		it('should delete a valid note index', () => {
			try {
				expect(notes.count()).toBe(2)
				notes.delete(0)
				expect(notes.count()).toBe(1)
				const note = notes.get(0)
				expect(note.title).toBe('Note Two')
			} catch(err) {
				expect(1).toBe(0)
			}
		})

		it('should reject a negative index', () => {
			try {
				expect(notes.count()).toBe(2)
				notes.delete(-1)
			} catch(err) {
				expect(notes.count()).toBe(2)
				const note = notes.get(1)
				expect(note.title).toBe('Note Two')
			}
		})

	})

	describe('getAll', () => {
		beforeEach( () => {
			notes.clear()
			notes.add({title: 'Note One', text: 'text for note one'})
			notes.add({title: 'Note Two', text: 'text for note two'})
		})
		it('retrieves all notes', () => {
			const allNotes = notes.getAll()
			expect(allNotes.length).toBe(2)
			expect(allNotes[0].title).toBe('Note One')
			expect(allNotes[1].title).toBe('Note Two')
		})
	})
})

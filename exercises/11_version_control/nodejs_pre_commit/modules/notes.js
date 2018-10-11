
'use strict'

let noteArray = []

exports.add = note => {
	console.log(note)
	validateNote(note)
	noteArray.push(note)
	console.log(noteArray.length)
	return note
}

exports.get = index => {
	if (index < 0 || index > noteArray.length -1) {
		throw new Error(`no note at index ${index}`)
	}
	return noteArray[index]
}

exports.delete = index => {
	if (index < 0 || index > noteArray.length -1) {
		throw new Error(`no note at index ${index}`)
	}
	noteArray.splice(index, 1)
}

exports.clear = () => {
	noteArray = []
}

exports.getAll = () => noteArray

exports.count = () => noteArray.length

function validateNote(note) {
	if (note.title === undefined || note.text === undefined) {
		throw new Error('invalid note')
	}
	return
}

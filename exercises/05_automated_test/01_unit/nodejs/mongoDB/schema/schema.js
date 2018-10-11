
'use strict'

// import the mongoose package
const mongoose = require('mongoose')

const defaultPort = 47497
let connStr = undefined

const auth = {
	user: process.env.MONGO_USER || 'testuser',
	pass: process.env.MONGO_PASS || 'password',
	host: process.env.MONGO_HOST || 'ds147497.mlab.com',
	port: process.env.MONGO_PORT || defaultPort,
	db: process.env.MONGO_DB || 'bookshop'
}

connStr = `mongodb://${auth.user}:${auth.pass}@${auth.host}:${auth.port}/${auth.db}`

if (process.env.NODE_ENV === 'development') {
	console.log('connecting to local database')
	connStr = 'mongodb://127.0.0.1/bookshop'
}

// console.log(connStr)
// if (this.auth.user === '' && this.auth.pass === '' && this.auth.port === '') {
//   console.log('using local database')
//   connStr = `mongodb://${this.auth.host}/${this.auth.db}`
// }
try {
	mongoose.connect(connStr)
} catch(err) {
	console.log(err.message)
	process.exit()
}

//mongodb://127.0.0.1/mydb

mongoose.Promise = global.Promise
const Schema = mongoose.Schema

// create a schema
const userSchema = new Schema({
	name: String,
	username: String,
	password: String
})

// create a model using the schema
exports.User = mongoose.model('User', userSchema)

// create a schema
const bookSchema = new Schema({
	account: String,
	title: String,
	authors: String,
	description: String,
	bookID: String
})

// create a model using the schema
exports.Book = mongoose.model('Book', bookSchema)

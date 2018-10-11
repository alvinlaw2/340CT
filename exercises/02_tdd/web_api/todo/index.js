'use strict'

const restify = require('restify')
const server = restify.createServer()

const restifyBodyParser = require('restify-plugins').bodyParser
server.use(restifyBodyParser())

const status = {
	'ok': 200,
	'created': 201,
	'notModified': 304,
	'badRequest': 400,
	'notFound': 404
}
const defaultPort = 8080
const port = process.env.PORT || defaultPort

const list = require('./module.js')

server.on('NotFound', (req, res) => res.json(status.notFound, {status: 'error', message: 'feed does not exist!'}).end())

server.on('MethodNotAllowed', (req, res, route) => res.json(status.MethodNotAllowed, {status: 'error', message: route.body.message}).end())


server.on('uncaughtException', (req, res, route, error) => {
	console.log(`Internal server error: ${error}`)
	res.json(status.internalServerError, {code: 500, response: {status: 'error', message: 'internal server error', data: route}}).end()
})


server.get('/', (req, res, next) => {
	res.redirect('/items', next)
})

server.get('/items', (req, res) => {
	try {
		res.setHeader('content-type', 'application/json')
		res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader('Allow', 'GET, POST')
		const items = list.getAll()
		res.json(status.ok, {status: 'success', message: {list: items}}).end()
	} catch(err) {
		res.json(status.notFound, {status: 'error', message: err.message}).end()
	}
})

server.get('/items/:item', (req, res) => {
	console.log(`get item ${req.params.item}`)
	try {
		res.setHeader('content-type', 'application/json')
		res.setHeader('Allow', 'GET, DELETE')
		const items = list.getResource(req.params.item)
		res.json(status.ok, {status: 'success', message: {list: items}}).end()
	} catch(err) {
		console.log('error caught')
		res.json(status.notFound, {status: 'error', message: err.message}).end()
	}
})

server.post('/items', (req, res) => {
	try {
		res.setHeader('content-type', 'application/json')
		res.setHeader('Allow', 'GET, POST')
		const item = list.add(req)
		res.json(status.created, {status: 'success', message: {item: item}}).end()
	} catch(err) {
		res.json(status.badRequest, {status: 'error', message: err.message}).end()
	}
})

server.del('/items/:item', (req, res) => {
	try {
		res.setHeader('content-type', 'application/json')
		res.setHeader('Allow', 'GET, DELETE')
		const item = list.remove(req.params.item)
		res.json(status.created, {status: 'success', message: {item: item}}).end()
	} catch(err) {
		res.json(status.notFound, {status: 'error', message: err.message}).end()
	}
})

server.listen(port, err => {
	if (err) console.error(err)
	else console.log(`App is ready at : ${port}`)
})

#!/usr/bin/env node

'use strict'

const express = require('express')

const handlebars = require('express-handlebars').create({defaultLayout: 'main'})
const bodyParser = require('body-parser')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

const port = 8080

const todo = require('./modules/todo')

app.get('/', async(req, res) => {
	try {
		const data = todo.getAll()
		res.render('home', {items: data})
	} catch(err) {
		console.log(err.message)
		res.render('empty')
	}
})

app.post('/', (req, res) => {
	try {
		todo.add(req.body.item, req.body.qty)
	} catch(err) {
		console.log(err.message)
	} finally {
		res.redirect('/')
	}
})

app.get('/delete/:key', (req, res) => {
	try {
		console.log(`key: ${req.params.key}`)
		todo.delete(req.params.key)
	} catch(err) {
		console.log(err.message)
	} finally {
		res.redirect('/')
	}
})

app.listen(port, () => console.log(`app listening on port ${port}`))

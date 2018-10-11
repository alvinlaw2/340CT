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

app.get('/register', (req, res) => {
	res.render('register')
})

app.post('/register', (req, res) => {
	const formData = JSON.stringify(req.body, null, 2)
	console.log(formData)
	const data = { body: formData }
	res.render('datapage', data)
})

app.listen(port, () => console.log(`app listening on port ${port}`))
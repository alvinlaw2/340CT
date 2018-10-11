
'use strict'

const express = require('express')
const app = express()

const handlebars = require('express-handlebars').create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const port = 8080

app.get('/', (req,res) => {
	res.render('home')
})

//This is the hello.handlebars code
app.get ('/hello',(req,res) =>{
  const data ={
    text: "Hello World!"
  }
  res.render('hello',data)
})

// This is the Date webpage 
app.get('/date', (req, res) => {
	const d = new Date()
	const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
  const time = `${d.getHours()+5}:${d.getMinutes()}:${d.getSeconds()}'`
  const unix = `${d.valueOf()}`
	const data = {
		title: 'My First Template',
		today: date,
    now: time,
    uTime: unix
	}
	res.render('date', data)
})

app.get('/food', (req, res) => {
	const food = [
		{name: 'bread', qty: 5},
		{name: 'butter', qty: 2},
		{name: 'jam', qty: 1},
		{name: 'cheese', qty: 4}
	]
	res.render('food', {myFood: food})
})

app.listen(port, () => console.log(`app listening on port ${port}`))

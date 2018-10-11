
'use strict'

const readline = require('readline-sync')
const kafka = require('kafka-node')
const Producer = kafka.Producer
const KeyedMessage = kafka.KeyedMessage
const client = new kafka.Client()
const producer = new Producer(client)

producer.on('ready', () => {
	const msg = readline.question('> ')
	const payload = [ { topic: 'test', messages: msg, partition: 0 }]
	producer.send(payload, (err, data) => {
		console.log(data)
	})
})

producer.on('error', err => {
	console.error(err.message)
})

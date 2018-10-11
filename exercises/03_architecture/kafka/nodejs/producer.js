
'use strict'

const kafka = require('kafka-node')
const Producer = kafka.Producer
const KeyedMessage = kafka.KeyedMessage
const client = new kafka.Client()
const producer = new Producer(client)

const payload = [ { topic: 'test', messages: 'hi', partition: 0 }]
producer.on('ready', () => {
	producer.send(payload, (err, data) => {
		console.log(data)
	})
})

producer.on('error', err => {
	console.error(err.message)
})

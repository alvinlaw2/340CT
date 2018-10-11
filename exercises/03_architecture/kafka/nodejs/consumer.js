
'use strict'

const kafka = require('kafka-node')
const Consumer = kafka.Consumer

const client = new kafka.Client()
//client.refreshMetadata()
const payload = [ { topic: 'test', partition: 0 } ]
const options = { autoCommit: false }

const consumer = new Consumer(client, payload, options)

consumer.on('message', message => {
	console.log(message)
})

consumer.on('error', err => {
	console.error(`error: ${err.message}`)
})

// consumer.addTopics(['t1', 't2'], (err, added) => { })
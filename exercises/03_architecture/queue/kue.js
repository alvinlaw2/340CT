/*
simple example of a NodeJS job queue.
*/

'use strict'

const moment = require('moment')

const queue = require('kue')
const jobs = queue.createQueue()

const job = jobs.create('logs', {event: 'request', dt: moment().unix()})
job.save( err => {
  if (!err) console.log(`job id ${job.id} saved`)
})

jobs.process('logs', (job, done) => {
  console.log(job.id)
  console.log(job.data.event)
  console.log(job.data.dt)
  done && done()
})

/*
Requires Redis to be installed
https://www.npmjs.com/package/kue
Manipulate dates
https://www.npmjs.com/package/moment
*/
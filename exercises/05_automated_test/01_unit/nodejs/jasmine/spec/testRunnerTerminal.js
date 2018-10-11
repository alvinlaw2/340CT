
'use strict'

const Jasmine = require('jasmine')
const jasmine = new Jasmine()

jasmine.loadConfigFile('spec/jasmine.json')

var reporters = require('jasmine-reporters')

const reporter = new reporters.TerminalReporter({
	verbosity: 3,
	color: true,
	showStack: true
})

jasmine.addReporter(reporter)

jasmine.execute()


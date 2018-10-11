
'use strict'

const Jasmine = require('jasmine')
const jasmine = new Jasmine()

jasmine.loadConfigFile('spec/jasmine.json')

var reporters = require('jasmine-reporters')

jasmine.addReporter(new reporters.TapReporter())

jasmine.execute()

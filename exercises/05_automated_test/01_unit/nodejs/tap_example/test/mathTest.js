
var tap = require('tap')
var math = require('../modules/math.js')

// Always call as (found, wanted) by convention
tap.equal(math(1), 'odd')
tap.equal(math(2), 'even')

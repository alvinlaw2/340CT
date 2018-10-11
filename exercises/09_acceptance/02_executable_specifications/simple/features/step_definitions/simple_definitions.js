
var Cucumber = require('cucumber')

Cucumber.defineSupportCode(function(context) {
	const setWorldConstructor = context.setWorldConstructor
	const Given = context.Given
	const When = context.When
	const Then = context.Then

	///// Your World /////
	//
	// Call 'setWorldConstructor' with to your custom world (optional)
	//

	const CustomWorld = function() {}

	CustomWorld.prototype.variable = 0

	CustomWorld.prototype.setTo = number => {
		this.variable = parseInt(number)
	}

	CustomWorld.prototype.incrementBy = number => {
		this.variable += parseInt(number)
	}

	setWorldConstructor(CustomWorld)

	///// Step Definitions /////

	Given(/^a variable set to (\d+)$/, number => {
		this.setTo(number)
	})

	When(/^I increment the variable by (\d+)$/, number => {
		this.incrementBy(number)
	})

	Then(/^the variable should contain (\d+)$/, number => {
		if (this.variable != parseInt(number))
			throw new Error(`Variable should contain ${number} but it contains ${this.variable}`)
	})
})

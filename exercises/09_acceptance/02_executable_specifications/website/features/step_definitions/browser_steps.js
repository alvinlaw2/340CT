
// features/step_definitions/browser_steps.js

// page interactions use 'selenium'.

const seleniumWebdriver = require('selenium-webdriver')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, When, Then}) => {
	Given('I am on the Cucumber.js GitHub repository', () => {
		return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master')
	})

	When('I click on {stringInDoubleQuotes}', text => {
		return this.driver.findElement({linkText: text}).then( element => {
			return element.click()
		})
	})

	When('I enter the text {stringInDoubleQuotes}', text => {
		return this.driver.findElement({linkText: text}).then( element => {
			return element.sendKeys(text)
		})
	})

	Then('I should see {stringInDoubleQuotes}', text => {
		const xpath = "//*[contains(text(),'" + text + "')]"
		const condition = seleniumWebdriver.until.elementLocated({xpath: xpath})
		return this.driver.wait(condition, 5000)
	})
})


/* simple Jasmine test suite to illustrate how to unit test a closure */
/* full documentation at https://jasmine.github.io/2.5/introduction.html */

describe('calculating total costs', function() {

	beforeAll(function() {
		console.log('beforeAll')
  	})

	afterAll(function() {
		console.log('afterAll')
  	})

	beforeEach(function() {
		console.log('beforeEach')
  	})

	afterEach(function() {
		console.log('afterEach')
  	})

	it('should calculate a simple total', function(done) {
		try {
			var shopping = new Shopping()
			shopping.setPrice(10)
			shopping.setQuantity(10)
			expect(shopping.getTotal()).toBe(100)
			done() // call the done() function when the test is complete
		} catch(err) {
			// no errors should be thrown
			console.log(err.message)
			expect(true).toBe(false)
		}
	})
	
	it('should calculate a simple total using a floating point price', function(done) {
		try {
			var shopping = new Shopping()
			shopping.setPrice(2.99)
			shopping.setQuantity(10)
			expect(shopping.getTotal()).toBe(29.90)
			done()
		} catch(err) {
			// no errors should be thrown
			console.log(err.message)
			expect(true).toBe(false)
		}
	})

	xit('should throw an error if quantity is a float', function(done) {
		try {
			var shopping = new Shopping()
			shopping.setQuantity(10.1)
			expect(true).toBe(false)
		} catch(err) {
			expect(err.message).toBe('quantity needs to a a whole number')
			done()
		}
	})

})

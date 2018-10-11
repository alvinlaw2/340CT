
const request = require('request')

exports.convert = (base, to, amt, callback) => {
	const url = `https://api.fixer.io/latest?base=${base}&symbols=${to}`
	request.get(url, (err, res, body) => {
		data = JSON.parse(body)
		//console.log(typeof(data))
		//console.log(data)
		const multiplier = data.rates[to]
		callback(amt * multiplier)
	})
}

/* API response format.
{
  "base": "GBP",
  "date": "2017-11-10",
  "rates": {
    "USD": 1.3188
  }
}
*/
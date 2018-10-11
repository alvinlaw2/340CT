
const request = require('request')

exports.convert = (base, to, amt, callback) => {
	const url = `https://api.fixer.io/latest?base=${base}&symbols=${to}`
	request.get(url, (err, res, body) => {
		data = JSON.parse(body)
		const multiplier = data.rates[to]
		callback(amt * multiplier)
	})
}

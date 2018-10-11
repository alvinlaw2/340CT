
'use strict'

exports.getParameter = (request, param) => {
	if (request.params === undefined || request.params[param] === undefined)
		throw new Error(`parameter ${param} missing`)
	return request.params[param]
}

exports.extractBodyKey = (req, key) => {
	if (req.body === undefined || req.body[key] === undefined)
		throw new Error(`missing key ${key} in request body`)
	return req.body[key]
}

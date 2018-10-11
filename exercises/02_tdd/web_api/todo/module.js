
'use strict'

let items = []

module.exports.add = request => {
	const data = this.extractBodyData(request)
	items.push(data)
	return data
}

module.exports.getResource = resource => {
	for(const index in items) {
		if(items[index].item === resource) {
			return items[index]
		}
	}
	throw new Error('item not found')
}

module.exports.getAll = () => items

module.exports.remove = resource => {
	for(const index in items) {
		if(items[index].item === resource) {
			const deleted = items[index]
			items.splice(index, 1)
			return deleted
		}
	}
	throw new Error('item not found')
}

module.exports.extractBodyData = request => ({item: request.body.item, qty: request.body.qty})

module.exports.clear = () => items = []


'use strict'

const status = {
	'ok': 200,
	'created': 201,
	'notModified': 304,
	'badRequest': 400,
	'notFound': 404
}

function UserAction() {
	const xhttp = new XMLHttpRequest()
	xhttp.onreadystatechange = () => {
		if (this.readyState === 4 && this.status === status.ok) {
			alert(this.responseText)
		}
	}
	xhttp.open('POST', 'Your Rest URL Here', true)
	xhttp.setRequestHeader('Content-type', 'application/json')
	xhttp.send('Your JSON Data Here')
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('page loaded')
	document.querySelector('button').onclick = e => {
		console.log('add button clicked')
		document.querySelector('input[type="text"]').value = ''
		document.querySelector('input[type="number"]').value = ''
		addItem( item => {
			//
		})
	}
	pullData( data => {
		console.log(`DATA: ${data}`)
		const html = formatData(data)
		document.querySelector('div').innerHTML = html
	})
})

function addItem(callback) {
	const xhr = new XMLHttpRequest()
	const method = 'GET'
	const url = 'http://localhost:8080/items'
	xhr.open(method, url, true)
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === status.ok) {
			const list = JSON.parse(xhr.responseText).message.list
			console.log(list)
			pullData( data => {
				const html = formatData(data)
				document.querySelector('div').innerHTML = html
				callback(list)
			})
		}
	}
	xhr.send()
}

function pullData(callback) {
	const xhr = new XMLHttpRequest()
	const method = 'GET'
	const url = 'http://localhost:8080/items'
	xhr.open(method, url, true)
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === status.ok) {
			const list = JSON.parse(xhr.responseText).message.list
			console.log(list)
			callback(list)
		}
	}
	xhr.send()
}

function formatData(items) {
	console.log(items)
	let html = '<table>'
	for(const item of items) {
		html += `<tr><td>${item.item}</td><td>${item.qty}</td></tr>`
	}
	console.log(`HTML: ${html}`)
	return html
}

// req.open("DELETE", uri, false)

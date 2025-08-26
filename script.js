let items = []

function addItems(n,p) {
	items.push({n,p})
	printReceipt()
}

function printReceipt() {
	let r = document.getElementById("receipt")
	let t = 0
	let o = ""

	items.forEach(function(i) {
		o += `${i.n} $${i.p}<br>`
		t += i.p
	})

	r.innerHTML += o
	r.innerHTML += `<br>total: $${i.p}`
}

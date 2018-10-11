
function Shopping() {
    var price = 0
    var quantity = 0
    var tax = 0
    return {
        setPrice: function(price) {
            console.log('setPrice')
            this.price = price
        },
        setQuantity: function(qty) {
            if (!Number.isInteger(qty)) {
                throw new Error('quantity needs to a a whole number')
            }
            this.quantity = qty
        },
        setTax: function(tax) {
            this.tax = tax
        },
        getTotal: function() {
            console.log('getTotal')
            var total = Math.round(this.price * this.quantity * 100) / 100
            taxFraction = this.tax/100 + 1
            return total
        }
    }
}

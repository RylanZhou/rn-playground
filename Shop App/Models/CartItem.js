export default class CartItem {
  constructor(quantity, productPrice, productTitle, sum) {
    this.quantity = quantity
    this.productPrice = productPrice
    this.productTitle = productTitle
    this.sum = sum
  }

  changeQuantity(increment) {
    this.quantity += increment
    this.sum += this.productPrice * increment
  }
}

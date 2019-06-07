
/**
 * Order summary model
 */
export default class Order {
  price: number
  quantity: number
  amountToPay: number
  cylinderSize: number
  cylinderSwap: string

  constructor(price: number, quantity: number, amountToPay: number, cylinderSize: number, cylinderSwap: string) {
    this.price = price
    this.quantity = quantity
    this.amountToPay = amountToPay
    this.cylinderSize = cylinderSize
    this.cylinderSwap = cylinderSwap
  }
  
}
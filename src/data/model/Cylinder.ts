
/**
 * Model for the cylinder object
 */
export default class Cylinder {
  id: string
  icon: any
  price: number
  weight: number
  
  constructor(id: string, icon: string, weight: number, price: number) {
    this.id = id
    this.icon = icon
    this.weight = weight
    this.price = price
  }
}
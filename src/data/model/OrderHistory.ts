
/**
 * Order History Model
 */
export default class OrderHistory {
  weight: number
  completed: boolean
  estimatedArrival: number
  dateCreated: number
  timeDelivered: number

  public constructor(weight: number, completed: boolean = false, estimatedArrival: number, dateCreated: number, timeDelivered: number) {
    this.weight = weight
    this.completed = completed
    this.estimatedArrival = estimatedArrival
    this.dateCreated = dateCreated
    this.timeDelivered = timeDelivered
  }

}
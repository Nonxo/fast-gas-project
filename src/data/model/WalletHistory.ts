
export default class WalletHistory {
  amount: number
  dateCreated: number
  time: number

  constructor(amount: number, dateCreated: number, time: number) {
    this.amount = amount
    this.dateCreated = dateCreated
    this.time = time
  }
}

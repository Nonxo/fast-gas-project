
export function getFormattedDate(timestamp: number): string {
  let dateString = new Date(timestamp).toDateString()
  return dateString.slice(4,)
}

export function getFormattedTime(timestamp: number): string {
  let date = new Date(timestamp)
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}
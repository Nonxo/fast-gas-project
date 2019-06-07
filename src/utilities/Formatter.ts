import Symbols from '../constants/Symbols'

export function formatWeightWithSymbol(weight: number) {
  return weight + Symbols.KILO
}

export function formatETAInmins(arrival: number) {
  return arrival + ((arrival > 1) ? 'mins' : 'min')
}
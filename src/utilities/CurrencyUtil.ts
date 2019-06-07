import Symbols from "../constants/Symbols";

export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2
  })
  return Symbols.NAIRA + formatter.format(value)
}
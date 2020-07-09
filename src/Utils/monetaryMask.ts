const maskNumberToReal = (x:any):string => {
  if (x === undefined || x === null) return x
  const input = x / 100
  const decimalPlaces = 2
  const isNegative = input < 0 ? '-' : ''
  const parseReturn = String(
    parseInt(Math.abs(+input || 0).toFixed(decimalPlaces), 10)
  )
  const firstsDigits = parseReturn.length > 3 ? parseReturn.length % 3 : 0
  return `R$${isNegative}${
    firstsDigits ? `${parseReturn.substr(0, firstsDigits)}.` : ''
  }${parseReturn
    .substr(firstsDigits)
    .replace(/(\d{3})(?=\d)/g, '$1.')},${Math.abs(input - <any>parseReturn)
    .toFixed(decimalPlaces)
    .slice(2)}`
}

export default maskNumberToReal

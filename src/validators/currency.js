// Used in ...
// 1. main.js  --->  As a global filter
// 2. ProductList.vue  ---> To display currency in a formatted way
// 3. Cart.vue  ---> To display currency in a formatter way

// This is a filter to format currency
const digitsRE = /(\d{3})(?=\d)/g

export function currency (value, currency, decimals) {
  // Convert the value to a float
  value = parseFloat(value)
  // If there is no value, just display a blank
  if (!isFinite(value) || (!value && value !== 0)) return ''
  // If there is a currency, use it. Otherwise Dollar
  currency = currency != null ? currency : '$'
  // Try to fix decimals to two places
  decimals = decimals != null ? decimals : 2
  // Create a string representation of the value
  var stringified = Math.abs(value).toFixed(decimals)
  // Seperate out the integer part to add commas
  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
  // Divide the integer part to parts of 3 and add commas in between
  var i = _int.length % 3
  var head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : ''
  // Seperate out the decimal part
  var _float = decimals ? stringified.slice(-1 - decimals) : ''
  // Display positive negative signs
  var sign = value < 0 ? '-' : ''
  // Return the result
  return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
}

// @ts-ignore
const toString = Object.prototype.toString

export function isPlainObject(val: any): val is Object {
  return val !== null && toString.call(val) === '[object Object]'
}

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

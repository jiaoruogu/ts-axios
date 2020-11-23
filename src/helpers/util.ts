const toString = Object.prototype.toString
// export const isObject = (val: any): val is Object => (val !== null && typeof val === 'object')

export const isDate = (val: any): val is Date => toString.call(val) === '[object Date]'

export const isPlainObject = (val: any): val is Object => toString.call(val) === '[object Object]'

export const extend = <T, U>(to: T, from: U): T & U => {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

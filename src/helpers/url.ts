import { isDate, isPlainObject } from "./util"

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export const buildURL = (url: string, params?:any) => {
  if (!params) {
    return url
  }

  const index = url.indexOf('#')
  if(index !== -1) {
    url = url.slice(0, index)
  }

  const parts: string[] = []

  Object.keys(params).map(key => {
    let val = params[key]
    // 此处undefined的判断也可以用  val === undefined
    // 而使用typeof的好处在于对一个未定义的变量使用不会报错
    if(val === null && typeof val === 'undefined') {
      return
    }

    let values: string[]
    if(Array.isArray(val)) {
      values = val
      key += '[]'
    } else  {
      values = [val]
    }




    values.forEach(val => {
      if(isDate(val)) {
        val = val.toISOString()
      } else if(isPlainObject(val)) {
        val = JSON.stringify(val)
      }

      parts.push(`${encode(key)}=${encode(val)}`)
    })

  })

  let serializedParams = parts.join('&')


  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}

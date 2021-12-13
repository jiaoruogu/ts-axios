import { isPlainObject, isDate } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    let val = params[key]

    if (val === null || typeof val === 'undefined') {
      return
    }

    if (Array.isArray(val)) {
      key += '[]'
    } else {
      val = [val]
    }

    val.forEach((v: any) => {
      if (isPlainObject(v)) {
        v = JSON.stringify(v)
      } else if (isDate(v)) {
        v = v.toISOString()
      }

      parts.push(`${encode(key)}=${encode(v)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex > -1) {
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}

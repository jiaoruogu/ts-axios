import { isPlainObject } from './util'

export const transformRequest = (data: any): any => {
  if(isPlainObject(data)) {
    data = JSON.stringify(data)
  }
  return data
}

import { AxiosRequestConfig } from './types'
import xhr from './xhr'
// import { buildURL } from './utils'

function axios(config: AxiosRequestConfig) {
  processURL(config)
  xhr(config)
}

function processURL(config: AxiosRequestConfig) {
  const { url, params } = config
  // config.url = buildURL(url, params)
}

export default axios

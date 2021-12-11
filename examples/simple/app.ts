import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get?test=123',
  params: {
    a: 1,
    b: 2
  }
})

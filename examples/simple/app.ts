import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get?test=123',
  params: {
    a: 1,
    b: 2
  }
})



axios({
  method: 'get',
  url: '/simple/get?test=123',
  params: {
    list: [1,2,3,5],
    time: new Date(),
    obj: {a: 123, b: 'abc'}
  }
})

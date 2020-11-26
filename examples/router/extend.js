const express = require('express')
const router = express.Router()

router.get('/extend/get', function(req, res) {
  res.json({
    mes: 'extend'
  })
})

router.head('/extend/head', function(req, res) {
  res.json({
    mes: 'head'
  })
})

router.options('/extend/options', function(req, res) {
  res.json({
    mes: 'options'
  })
})

router.delete('/extend/delete', function(req, res) {
  res.json({
    mes: 'delete'
  })
})

router.post('/extend/post', function(req, res) {
  res.json(req.body)
})

router.put('/extend/put', function(req, res) {
  res.json(req.body)
})

router.patch('/extend/patch', function(req, res) {
  res.json(req.body)
})

router.get('/extend/user', function(req, res) {
  res.json({
    code: 200,
    result: {
      name: 'andychiao',
      age: 24
    },
    message: '请求成功！'
  })
})

module.exports = router

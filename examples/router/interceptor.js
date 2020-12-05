const express = require('express')
const router = express.Router()

router.get('/interceptor/get', (req,res) => {
  res.end('hello')
})


module.exports = router

const express = require('express')
const { Random } = require('mockjs')

const Mock = require('mockjs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('欢迎来到mock server!')
  })

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/postMan', function (req, res) {
    res.send('Got a postMan request')
})

app.put('/pustMan', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/deleteMan', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

app.get('/mock', function(req,res) {
    console.log('query mock data')
    data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "name": Random.string(8,10),
        }]
    })
    res.json(data)
})

app.get('/users/:userId', function (req, res) {
  res.send(req.params)
})

app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/nice', (req, res) => {
    res.send('Yeah Very Good!')
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

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from another function!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
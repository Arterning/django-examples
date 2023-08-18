const express = require('express')

const app = express()
const port = 3000

//你可以在一个路径上绑定多个函数
var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}
  
var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res) {
    res.send('Hello from C!')
}
  
app.get('/example/c', [cb0, cb1, cb2])

//通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问
//or app.use('/public', express.static('public'))
app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
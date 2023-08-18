const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

const news = [
    {
        id: 1,
        content: 'content',
        date: '2010-02-05'
    }
]

function copyProperties(source, target) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        if (target.hasOwnProperty(key)) {
          target[key] = source[key];
        }
      }
    }
}

/**
 * 删除数组中指定的元素
 */
function spliceDelete(array, name) {
    // 找到要删除的对象在数组中的索引位置
    var indexToDelete = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            indexToDelete = i;
            break;
        }
    }

    // 使用 splice() 方法删除数组中的对象
    // 第二个参数为1表示要删除一个元素
    if (indexToDelete !== -1) {
        array.splice(indexToDelete, 1);
    }
}

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    console.log(req.params);
    const id  = Number(req.params.id);
    const found = news.find(item => item.id === id)
    res.send(found)
})

app.post('/news/', (req, res) => {
    console.log(req.body);
    const body = req.body;
    news.push(body)
    console.log(news);
    res.send('ok')
})

app.put('/news/:id', (req, res) => {
    const id  = Number(req.params.id);
    const found = news.find(item => item.id === id)
    const body = req.body;
    copyProperties(body, found);
    res.send('ok')
})

app.delete('/news/:id', (req, res) => {
    const id  = Number(req.params.id);
    //const found = news.find(item => item.id === id)
    news = array.filter(function(item) {
        return item.id !== id;
    });
    res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
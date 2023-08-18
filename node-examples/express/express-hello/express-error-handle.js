const express = require('express')
const app = express()
const port = 3000
const hostname = 'localhost'

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// 指定模板存放目录
app.set('views', 'views');

// 指定模板引擎为 Handlebars
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});
  
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500');
});

//* 表示匹配任何路径。将此中间件放在所有路由后面，即可捕获所有访问路径均匹配失败的请求。
app.use('*', (req, res) => {
    res.status(404).render('404', { url: req.originalUrl });
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
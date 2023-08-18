## Request

更强大的 Request 和 Response 对象
首先是 Request 请求对象，通常我们习惯用 req 变量来表示。下面列举一些 req 上比较重要的成员（如果不知道是什么也没关系哦）：

- req.body：客户端请求体的数据，可能是表单或 JSON 数据
- req.params：请求 URI 中的路径参数
- req.query：请求 URI 中的查询参数
- req.cookies：客户端的 cookies


## Response
然后是 Response 响应对象，通常用 res 变量来表示，可以执行一系列响应操作，例如：

```javascript
// 发送一串 HTML 代码
res.send('HTML String');

// 发送一个文件
res.sendFile('file.zip');

// 渲染一个模板引擎并发送
res.render('index');
```
Response 对象上的操作非常丰富，并且还可以链式调用：


```javascript
// 设置状态码为 404，并返回 Page Not Found 字符串
res.status(404).send('Page Not Found');
```
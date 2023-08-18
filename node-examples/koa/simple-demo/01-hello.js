const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// add url-route:
router.get('/yeah/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Yeah, ${name}!</h1>`;
});

app.use(router.routes());
app.listen(3000);

console.log('app started at port 3000...');
/**
 * koa-compose模块可以将多个中间件合成为一个
 */

const Koa = require('koa');
const app = new Koa();
const compose = require('koa-compose');

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middlewares = compose([logger, main]);

app.use(middlewares);
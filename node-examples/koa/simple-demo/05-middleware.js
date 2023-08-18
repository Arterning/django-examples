const Koa = require('koa');
const app = new Koa();

/**
 * 像上面代码中的logger函数就叫做"中间件"（middleware），
 * 因为它处在 HTTP Request 和 HTTP Response 中间，用来实现某种中间功能。app.use()用来加载中间件。
 * 其实这玩意就是后端中的老概念 也就是过滤器或者拦截器
 * Koa 的最大特色，也是最重要的一个设计，就是中间件（middleware）express 应该是没有这个玩意
 * 
 * 多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。
 */
const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
}

app.use(logger);
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx,next) => {
    ctx.response.body = 'hello word22266666'
})

app.listen(3009)
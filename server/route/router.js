//引入路由
const router = require('koa-router')();

//login
router.get('/login',(ctx,next) => {
    ctx.body = '欢迎'
})

module.exports = router
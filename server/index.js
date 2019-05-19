const Koa = require('koa');
const app = new Koa();

//引入路由配置
const route = require('./route/router')

//引入解析body
const bodyparser = require('koa-bodyparser');

//引入mongoDB
const mongoClient = require('mongodb').MongoClient;
mongoClient.connect('http://localhost:27017/blog')

app.use(bodyparser())
app.use(route.routes())


app.listen(3009)
console.log('app started at port 3009...')
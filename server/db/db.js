//引入mongoose 
const Mongoose = require('mongoose')

//使用mongoose链接mongoDB数据库
Mongoose.connect("mongodb://admin:admin123456@localhost:27017/admin",{
    useNewUrlParser:true
},function(err){
    if(err){
        console.log(err)
        return 
    }
    console.log("已成功连接数据库！")
})

//导出mongoose
module.exports =  Mongoose
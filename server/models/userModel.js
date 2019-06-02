//引入db.js
const Mongoose = require("../db/db.js");

//定义Schema
const UserSchema = Mongoose.Schema({
  name: String,
  age: Number,
  sex: String
});

//生成Model
const UserModel = Mongoose.model("User", UserSchema, "user");

//5.$project
UserModel.aggregate(
  [
    {
      $project: {
        name: 1,
        age: 1
      }
    },
    {
      $match: {
        age: { $gt: 18 }
      }
    },
    {
      $sort: {
        age: -1
      }
    },
    {
        $limit:2
    },
    {
        $skip:1
    }
  ],
  function(err, docs) {
    if (err) {
      console.log("查询出错：" + err);
      return;
    }
    console.log(docs);
  }
);

//4.查询
// UserModel.find({}, function(err, docs) {
//   if (err) {
//     console.log("查询出错：" + err);
//     return;
//   }
//   console.log(docs);
// });

//3.删除
// UserModel.deleteOne({ name: "caristop3" }, function(err, docs) {
//   if (err) {
//     console.log("更新出错：" + err);
//     return;
//   }
//   console.log(docs);
// });

//2.修改
// UserModel.updateOne({"name":"caristop3"},{age:40},function(err,docs){
//     if(err){
//         console.log('更新出错：'+err)
//         return
//     }
//     console.log(docs)
// })

//1.增加(实例化模型)
// let add = new UserModel({
//     name:'zhangsan2',
//     age:24,
//     sex:'男'
// })
// add.save(function(err,docs){
//     if(err){
//         console.log('保存出错:'+err)
//         return
//     }
//     console.log(docs)
// })

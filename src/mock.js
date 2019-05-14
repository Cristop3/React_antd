import Mock from 'mockjs';

const Random = Mock.Random;
let All = [],
    Private = [],
    Public = [],
    Draft = [],
    Delete = [];

for (let i = 0; i < Random.integer(1, 20); i++) {
  let template = {
    'Boolean': Random.boolean, // 可以生成基本数据类型
    'Natural': Random.natural(1, 100), // 生成1到100之间自然数
    'Integer': Random.integer(5, 100), // 生成1到100之间的整数
    'Float': Random.float(0, 100, 0, 3), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    'Character': Random.character(), // 生成随机字符串,可加参数定义规则
    'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
    'Range': Random.range(0, 10, 2), // 生成一个随机数组
    'Date': Random.datetime(), // 生成一个随机日期,可加参数定义日期格式
    'Color': Random.color(), // 生成一个颜色随机值
    'Paragraph': Random.cparagraph(1, 2), //生成2至5个句子的文本
    'Name': Random.name(), // 生成姓名
    'Url': Random.url(), // 生成web地址
    'Address': Random.province() // 生成地址
  }
  All.push(template)
}
for (let i = 0; i < Random.integer(1, 20); i++) {
    let template = {
      'Boolean': Random.boolean, // 可以生成基本数据类型
      'Natural': Random.natural(1, 100), // 生成1到100之间自然数
      'Integer': Random.integer(5, 100), // 生成1到100之间的整数
      'Float': Random.float(0, 100, 0, 3), // 生成0到100之间的浮点数,小数点后尾数为0到5位
      'Character': Random.character(), // 生成随机字符串,可加参数定义规则
      'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
      'Range': Random.range(0, 10, 2), // 生成一个随机数组
      'Date': Random.datetime(), // 生成一个随机日期,可加参数定义日期格式
      'Color': Random.color(), // 生成一个颜色随机值
      'Paragraph': Random.cparagraph(1, 2), //生成2至5个句子的文本
      'Name': Random.name(), // 生成姓名
      'Url': Random.url(), // 生成web地址
      'Address': Random.province() // 生成地址
    }
    Private.push(template)
}
  for (let i = 0; i < Random.integer(1, 20); i++) {
    let template = {
      'Boolean': Random.boolean, // 可以生成基本数据类型
      'Natural': Random.natural(1, 100), // 生成1到100之间自然数
      'Integer': Random.integer(5, 100), // 生成1到100之间的整数
      'Float': Random.float(0, 100, 0, 3), // 生成0到100之间的浮点数,小数点后尾数为0到5位
      'Character': Random.character(), // 生成随机字符串,可加参数定义规则
      'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
      'Range': Random.range(0, 10, 2), // 生成一个随机数组
      'Date': Random.datetime(), // 生成一个随机日期,可加参数定义日期格式
      'Color': Random.color(), // 生成一个颜色随机值
      'Paragraph': Random.cparagraph(1, 2), //生成2至5个句子的文本
      'Name': Random.name(), // 生成姓名
      'Url': Random.url(), // 生成web地址
      'Address': Random.province() // 生成地址
    }
    Public.push(template)
  }
  for (let i = 0; i < Random.integer(1, 20); i++) {
    let template = {
      'Boolean': Random.boolean, // 可以生成基本数据类型
      'Natural': Random.natural(1, 100), // 生成1到100之间自然数
      'Integer': Random.integer(5, 100), // 生成1到100之间的整数
      'Float': Random.float(0, 100, 0, 3), // 生成0到100之间的浮点数,小数点后尾数为0到5位
      'Character': Random.character(), // 生成随机字符串,可加参数定义规则
      'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
      'Range': Random.range(0, 10, 2), // 生成一个随机数组
      'Date': Random.datetime(), // 生成一个随机日期,可加参数定义日期格式
      'Color': Random.color(), // 生成一个颜色随机值
      'Paragraph': Random.cparagraph(1, 2), //生成2至5个句子的文本
      'Name': Random.name(), // 生成姓名
      'Url': Random.url(), // 生成web地址
      'Address': Random.province() // 生成地址
    }
    Draft.push(template)
  }
  for (let i = 0; i < Random.integer(1, 20); i++) {
    let template = {
      'Boolean': Random.boolean, // 可以生成基本数据类型
      'Natural': Random.natural(1, 100), // 生成1到100之间自然数
      'Integer': Random.integer(5, 100), // 生成1到100之间的整数
      'Float': Random.float(0, 100, 0, 3), // 生成0到100之间的浮点数,小数点后尾数为0到5位
      'Character': Random.character(), // 生成随机字符串,可加参数定义规则
      'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
      'Range': Random.range(0, 10, 2), // 生成一个随机数组
      'Date': Random.datetime(), // 生成一个随机日期,可加参数定义日期格式
      'Color': Random.color(), // 生成一个颜色随机值
      'Paragraph': Random.cparagraph(1, 2), //生成2至5个句子的文本
      'Name': Random.name(), // 生成姓名
      'Url': Random.url(), // 生成web地址
      'Address': Random.province() // 生成地址
    }
    Delete.push(template)
  }

Mock.mock('/rest/data', 'post', (options)=>{
    switch(options.body){
        case 'all':
            return All
        case 'apublic':
            return Public
        case 'aprivate':
            return Private
        case 'adraft':
            return Draft
        case 'adelete':
            return Delete
        default:
            return All   
    }
})
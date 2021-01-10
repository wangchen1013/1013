//test是一个测试文件 不要在项目中使用  


// 由于上面的pro.js引入了sql下面的production,现在这里又引入db.js 一套嵌一套！！！是一个链式连接
const db = require('./db.js')
 
// 类似于lol 中的六神装 不能七神装的数据管理 fdsfsdfsdfsdf,引入的Schema的方法 new的肯定是最后一个Schema的方法 
const productionSchema = new db.mongoose.Schema ({
    "proName":{type:String},
    "column":{type:String},
    "brand":{type:String},
    "logo":{type:String},
    "price":{type:String},
    "proImg":{type:String},
    "introduce":{type:String},
    "stock":{type:Number},
    "discount":{type:Number},
    "score":{type:Number}
})

// 把规整的数据类型送到production文档里面 
module.exports = db.mongoose.model("production",productionSchema)

var express = require('express');
var router = express.Router();

/* GET home page. */   //通过首页的路由的使用找到这里 由于路径是/ 默认的 不用在修改
router.get('/', function(req, res, next) {
  // 直接渲染index.ejs, 注意有个索引为0
  res.render('index', {
    index:0
  });
});

module.exports = router;

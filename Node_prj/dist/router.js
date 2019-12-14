"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// let express = require("express")
// let fs = require('fs')
// 通过 ES6 模块化方式导入模块
var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.render('index.html');
});
router.get('/images/logo.html', function (req, res) {
  console.log("请求静态文件");
  res.end();
}); // module.exports = router
// 通过 ES6 方式导出模块

var _default = router;
exports["default"] = _default;
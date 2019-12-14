"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = require("path");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require("express")
// const path = require("path")
// const bodyParser = require("body-parser")
// const router = require("./router")
var app = (0, _express["default"])(); // 设置 静态文件

app.use('/static', _express["default"]["static"]((0, _path.join)(__dirname, '../public')));
app.use('/node_modules', _express["default"]["static"]((0, _path.join)(__dirname, "../node_modules"))); // 配置 body-parser

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // 配置模板引擎

app.engine('html', require("express-art-template")); // app.set('views', '../views')
// 配置路由

app.use(_router["default"]);
app.listen(3000, function () {
  console.log('Server is runing on 3000');
});
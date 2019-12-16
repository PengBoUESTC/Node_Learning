// const express = require("express")
// const path = require("path")
// const bodyParser = require("body-parser")
// const router = require("./router")

import express  from "express"
import { join } from "path"
// import bodyParser from "body-parser"
// import fs from "fs"
import nunjucks from "nunjucks"

import router from "./router"
import mybodyParser from "./midware/body_parser"
import errPage from "./midware/404"
import errlog from "./midware/err_log"

let app = express()

// 设置 静态文件
app.use('/public', express.static(join(__dirname, '../public')))
app.use('/node_modules', express.static(join(__dirname, "../node_modules")))

// 配置模板引擎
nunjucks.configure('views', { autoescape: true, express: app})

// 手动设置post 数据获取中间件
app.use(mybodyParser)

// 配置路由
app.use(router)

// 错误处理中间件， 当调用 next(err) 时才会调用此中间件
app.use(errlog)

app.use(errPage())

app.listen(3000, ()=>{
	console.log('Server is runing on 3000')
})
// const express = require("express")
// const path = require("path")
// const bodyParser = require("body-parser")
// const router = require("./router")

import express  from "express"
import { join } from "path"
import bodyParser from "body-parser"
import router from "./router"

let app = express()

// 设置 静态文件
app.use('/static', express.static(join(__dirname, '../public')))
app.use('/node_modules', express.static(join(__dirname, "../node_modules")))

// 配置 body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// 配置模板引擎
app.engine('html', require("express-art-template"))
// app.set('views', '../views')

// 配置路由
app.use(router)

app.listen(3000, ()=>{
	console.log('Server is runing on 3000')
})
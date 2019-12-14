// const express = require("express")
// const path = require("path")
// const bodyParser = require("body-parser")
// const router = require("./router")

import express  from "express"
import { join } from "path"
import bodyParser from "body-parser"
import router from "./router"
import fs from "fs"
import nunjucks from "nunjucks"

// 自定义中间件的使用
const log = require("../midware/log.js")
const errPage = require("../midware/404.js")

let app = express()

// 自定义日志信息中间件
// app.use(log())

// 设置 静态文件
app.use('/public', express.static(join(__dirname, '../public')))
app.use('/node_modules', express.static(join(__dirname, "../node_modules")))

// 配置 body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// 配置模板引擎 art-template
// app.engine('html', require("express-art-template"))
// app.set('views', '../views')

// 配置模板引擎
nunjucks.configure('views', { autoescape: true, express: app})

// 配置路由
app.use(router)

// 错误处理中间件， 当调用 next(err) 时才会调用此中间件
app.use((err, req, res, next)=>{
	if(err){
		const err_log = `
		错误名： ${ err.name }
		错误信息： ${ err.message }
		错误堆栈： ${ err.stack }
		`
		fs.appendFile('./err_log.txt', err_log, err=>{
			if(err){console.log('错误信息写入错误')}
		})
	}
})

app.use(errPage())

app.listen(3000, ()=>{
	console.log('Server is runing on 3000')
})
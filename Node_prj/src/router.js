// let express = require("express")
// let fs = require('fs')

// 通过 ES6 模块化方式导入模块
import express from "express"
import fs from "fs"

let router = express.Router()

router.get('/', (req, res)=>{
	res.render('index.html')
})

router.get('/images/logo.html', (req, res)=>{
	console.log("请求静态文件")
	res.end()
})

// module.exports = router

// 通过 ES6 方式导出模块
export default router
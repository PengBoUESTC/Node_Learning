// let express = require("express")
// let fs = require('fs')

// 通过 ES6 模块化方式导入模块
import express from "express"
import fs from "fs"

let router = express.Router()

router.get('/', (req, res, next)=>{
	try{
		console.log('get')
		res.render('index.html')

		// 以下用于 jsonp 测试
		// let data = {name: "pb"}
		// let data_str = JSON.stringify(data)
		// let callback = req.query.callback
		// // console.log(callback)
		// res.end(`window.callbacks.${callback}(${data_str})`)
	}
	catch(e){
		res.sendStatus(500)
		next(e)
	}
	
})

// 呈现广告管理页面
router.get('/advert_list', (req, res, next)=>{
	try{
		res.render('advert_list.html')
	}catch(e){
		res.sendStatus(500)
		next(e)
	}
})

// 呈现广告添加页面
router.get('/advert/add', (req, res, next)=>{
	try{
		res.render('advert_add.html')
	}catch(e){
		res.sendStatus(500)
		next(e)
	}
})

// 处理广告添加信息表单数据
router.post('/advert/add', (req, res, next)=>{
	console.log('post')
	try{
		console.log(req.body)
		res.json(req.body)
	}catch(e){
		next(e)
	}
})

// module.exports = router

// 通过 ES6 方式导出模块
export default router
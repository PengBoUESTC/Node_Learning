// let express = require("express")
// let fs = require('fs')

// 通过 ES6 模块化方式导入模块
import express from "express"
import fs from "fs"

let router = express.Router()

router.get('/', (req, res)=>{
	res.render('index.html', { name: "nunjucks"})
})

router.get('/err', (req, res, next)=>{
	try{
		const str = JSON.parse('{abc')
		res.json(str)
	}catch(e){
		res.status(500).end()
		next(e)
	}

})

// module.exports = router

// 通过 ES6 方式导出模块
export default router
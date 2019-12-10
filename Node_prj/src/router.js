let express = require("express")
let fs = require('fs')

let router = express.Router()

router.get('/', (req, res)=>{
	fs.readFile('../public/index.html', (err, data)=>{
		if(!err){
			console.log('数据读取成功')
			console.log(req.query)
			res.end(data)
		}
		else{
			console.log('数据读取失败')
			res.end()
		}
	})
})

router.get('/images/logo.html', (req, res)=>{
	console.log("请求静态文件")
	res.end()
})

module.exports = router
// 用于记录任意请求的请求方法与请求时间等信息
const fs = require("fs")

export default () => {
	return (req, res, next)=>{
		// // 获取请求方式
		// console.log(req.method)
		// // 获取请求 ip
		// console.log(req.ip)
		// // 获取路径相关的信息
		// console.log(req.originalUrl)
		// console.log(req.baseUrl)
		// console.log(req.path)
		// // 获取请求时间
		// console.log(new Date())
		const log = `请求方式 ${ req.method }, 请求路径 ${ req.path }, 请求时间 ${ new Date() }\n`
		fs.appendFile("./log.txt", log, err=>{
			if(err){console.log("日志文件写入错误！")}
		})
		next()
	}
}
// 解析 post 数据
import queryString from "querystring"
import formidable from "formidable"
import config from "../config"

export default (req, res, next)=>{
	if(!(req.method.toLowerCase() === "post")){
		// 当 next() 不 return 时，再执行完 匹配的中间件之后，next 之后的代码依然会顺序执行
		return next()
	}
	// 当表单数据为 application/x-wwww-form-urlencoded 类型时通过自己进行处理
	if(req.headers["content-type"].startsWith('application/x-www-form-urlencoded')){
		let body = ""
		req.on("data", chunk => {
			body += chunk
		})

		req.on("end", ()=>{
			req.body = queryString.parse(body)
			return next()
		})
	}

	//否则通过 formidable 进行数据解析
	const form = new formidable.IncomingForm()

	form.keepExtensions = true
	form.uploadDir = config.uploadPath

	form.parse(req, (err, fileds, files)=>{
		if(err){
			return next(err)
		}
		req.body = fileds
		if(Object.keys(files).length){
			let keys = Object.keys(files)
			for (let key of keys){
				req.body[key] = files[key].path
			}
			
		}
	})

	form.on("end", ()=>{
		return next()
	})
}
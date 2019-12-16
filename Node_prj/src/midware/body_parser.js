// 解析 post 数据
import queryString from "querystring"

export default (req, res, next)=>{
	if(!req.method.toLowerCase() === "post"){
		// 当 next() 不 return 时，再执行完 匹配的中间件之后，next 之后的代码依然会顺序执行
		return next()
	}else{
		let body = ""
		req.on("data", chunk => {
			body += chunk
		})

		req.on("end", ()=>{
			req.body = queryString.parse(body)
			next()
		})
	}
}
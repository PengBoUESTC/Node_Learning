// 封装静态资源处理中间件，

import path from "path"
import fs from "fs"

export default dirPth => {
	return (req, res, next)=>{
		// 获取文件路径
		// 当app.use('path', callback) 中指定了 path 参数，通过 req.path 获取的路径将不包含该字符串
		const urlPath = path.join(dirPth, req.path)

		// 根据文件路径读取文件，并返回文件
		fs.readFile(urlPath, (err, data)=>{
			if(err){
				return res.end('404 Not Found')
			}
			res.end(data)
		})
	}
}
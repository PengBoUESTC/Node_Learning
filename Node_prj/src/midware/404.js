const fs = require("fs")

export default () => {
	return (req, res, next)=>{

		// 文件读取中的路径为 相对于 node 命令执行的目录
		fs.readFile('./views/404.html', (err, data)=>{
			if(err){
				return console.log('404 页面读取错误！')
			}
			res.end(data)
		})
	}
}
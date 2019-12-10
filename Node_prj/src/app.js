const express = require("express")
const path = require("path")
let bodyParser = require("body-parser")

let router = require("./router")

let app = express()

// 设置 静态文件
app.use('/static', express.static(path.join(__dirname, '../public')))
app.use('/node_modules', express.static(path.join(__dirname, "../node_modules")))

// 配置 body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// 配置模板引擎
app.engine('html', require("express-art-template"))

// 配置路由
app.use(router)

app.listen(3000, ()=>{
	console.log('Server is runing on 3000')
})
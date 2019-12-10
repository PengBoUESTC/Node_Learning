---
title: node
date: 2019-12-08 20:08:08
tags: Node
---

## 1.1 Node 能干什么

+ 服务器后端
+ 命令行工具
  - git
  - npm 
  - hexo
  - webpack
  - babel

## 1.2资源

+ 深入浅出Node.js
+ Node.js权威指南
+ Node 入门 **https://www.nodebeginner.org/index-zh-cn.html**

### 1.3 目标

+ B/S编程模型
+ 模块化编程
+ Node 常用API
+ 异步编程
+ Express框架
+ ...

### 2 安装Node环境

+ LTS 版本： Long Time Support

+ ```node --version``` 查看安装是否成功，与安装的版本

+ Node 没有 BOM 与 DOM ，是一个事件驱动I/O服务端 ```JavaScripts``` 环境， 基于chrome V8 引擎

+ 通过 ```node XXX.js```  执行JS 脚本

### 3 NPM 介绍

+ npm: npde package manager, 用于安装包或者插件

### 4 package.json 与 package-lock.json 

+ ```package.json``` 文件用于记录通过 npm 安装的**项目依赖项**
	
	+ 可通过 ``` npm init -y ``` 初始化得到

	+ ```dependencies``` 属性： 用于记录项目发布需要安装的依赖项
	~~~bash
	npm install --save
	~~~

	+ ```devDependencies``` 属性： 用于记录仅开发过程需要使用的依赖项
	~~~bash
	npm install --save-dev
	~~~

+ ```pacjage-lock.json``` 文件为高版本的 npm 自动生成的，用于记录安装依赖树的文件

	+ 该文件不但会记录依赖项，并且会**锁定** 依赖项的**版本信息**

	+ 该文件会记录依赖项的 **urL** 信息，便于下次安装

+ 依赖项的恢复
~~~bash
npn intall   //重新下载所有的依赖项  
npm install --production // 仅仅下载 dependencies 记录的依赖项
~~~

+ ```scripts``` 属性
	
	+ 用于自定义 命令行 命令

### 5 npm 的应用

+ 安装依赖项
~~~bash
npm init -y // 初始化得到 package.json 文件

npm install <package-name>
npm install <package-name>@x.x.x  //安装特定的版本

npm install  --save <package-name> // 将其作为依赖项写入 package.json 的 dependencies
npm install --save-dev <package-name> // 将其作为依赖项写入 package.json 的 dev 属性 devDependencies

npm install // 恢复package.json 中记录的依赖项
npm install --production // 安装 package.json 中 dependencies  记录的依赖项

npm install --global <package-name>
npm install -g <package-name> // 在全局安装依赖项
~~~

### 6 Node API 

+ **http**

+ **fs**

+ **path**

	+ ```path.join([string...])``` : 将参数拼接成可用的路径

	+ ```path.basename(path [, ext])``` : 返回路径的最后一部分， 用于获取文件名， ext 参数用于指定不返回的文件扩展名

	+ ```path.dirname(path)``` : 返回路径的目录，尾部的目录分隔符被忽略

		+ \__dirname 为 当前目录名，与 path.dirname(path) 相同

		+ \__filename 为当前文件的绝对路径

	+ ```path.extname(path)``` : 用户返回文件的扩展名

	+ ```path.parse(path)``` :解析目录，返回一个对象
	~~~bash
	{
		root: 
		dir:
		base:
		ext: 
		name: 
	}
	~~~

+ **url**

+ **os**

+ **util**

+ **events**

+ **module**

	+ ```module.exports``` 对象： 注意 ```exports``` 与 其的区别，```exports``` 方式只能通过属性添加的方式进行导出。 ```module.exports``` 可进行直接赋值的导出方式

	+ ```require()``` 用于模块的引入

### 7 Node 框架 - Express

#### 7.1 基础

+ ```express``` 安装
~~~bash
npm install express --save
~~~

+ ```express``` 包的引入
~~~bash
let express = require("express)

import express from express // es6 模块化规则
~~~

#### 7.2```express``` 的应用

+ 创建应用
~~~bash
let app = express()
~~~

+ 路由
~~~bash
app.METHOD(PATH, HANDLER)

app.get('/', (req, res)=>{
	...
	res.send()
})

app.post('/', (req, res)=>{
	...
	res.send()
})

//路径支持正则表达
~~~

+ ```res``` 的方法

	+ 发送响应，并结束```response```过程
	~~~bash
	res.end()
	~~~

	+ 发送各种类型的 ```response``` 
	~~~bash
	res.send('message')
	~~~

	+ 渲染模板引擎
	~~~bash
	res.render()
	~~~

	+ 重定向
	~~~bash
	res.redirect()
	~~~

	+ 发送 ```JSON``` 响应
	~~~bash
	res.json()
	~~~

+ ```req``` 属性

	+ 获取路由的 url
	~~~bash
	req.baseUrl()
	~~~

	+ 获取请求体, 通常用于获取 **post** 数据
	~~~bash
	req.body //默认状态下是 undefined，返回对象
	~~~
	**需要配置 body-parser 等中间件**

	+ 获取 cookie
	~~~bash
	req.cookies // 值为一个对象
	~~~
	**需要配置 cookie-parser 中间件**

	+ 获取 hostname 
	~~~bash
	req.hostname
	~~~

	+ 获取 ip
	~~~bash
	req.ip
	~~~

	+ 获取请求连接的 路径部分
	~~~bash
	req.path
	~~~

	+ 获取url 的 query 部分
	~~~bash
	req.query
	~~~

+ ```app``` 方法

	+ ```app.engine()``` : 配置模板引擎
	~~~bash
	app.engine('ext', require("template_engine"))
	~~~

	+ ```app.set()```


	+ ```app.use()``` ： 挂载中间件

		+ 挂载指定的中间件，到指定的路径，当请求路径匹配时执行中间件函数
		~~~bash
		app.use([path], callback, [callback])
		// path  用于指定中间件作用的文件 默认值为 '/',子目录也会调用
		// callback 回调，可以是中间件方法
		~~~

	+ ```app.route()``` ： 创建链式的响应

+ ```express.Router()```

	+ ```express.Router``` 是一个类， 用于创建模块化的路由处理程序模块
 	~~~bash
 	const express = require("express")
 	let router = express.Router()
 	router.get('/', ()=>{})
 	router.post('/', ()=>{})
 	module.exports = router
 	~~~

	+ 在 ```app.js``` 中引入该 ```router``` 模块
	~~~bash
	let router = require("./router)
	app.use('', router)
	~~~


+ 设置静态文件
	
	+ 通过设置静态文件路径，将特定的文件暴露出去，请求路由会在该路径内自动查找文件

	+ 通过 express 内置中间件函数 ``` express.static``` 实现静态文件设置
	~~~bash
	express.static('Static_Path')
	~~~

	+ 与 ```app.use()``` 结合使用
	~~~bash
	app.use([path], express.static('Static_Path1'))
	app.use([path], express.static('Static_Path2'))
	~~~
	**会根据目录添加顺序依次查询**

	+ 为了便于项目的迁移，这里的静态文件路径应该通过**拼接得到**
	~~~bash
	app.use(express.static(path.join(\__dirname, 'Rel_Name')))
	~~~
	**使用了 Node 中的 path 模块**

+ 中间件

	+ 中间件函数是能够在 ```request-response``` 环中能够访问 ```req``` 对象与 ```res``` 对象， 以及下一个中间件函数的的函数

	+ 中间件可以执行以下功能

		+ 执行代码

		+ 改变 ```req``` 与 ```res``` 对象

		+ 终结 ```request-response``` 环

		+ 调用下一个 中间件函数 （next 参数）

	+ ```body-parser``` 中间件配置

		+ 中间件安装 
		~~~bash
		npm install --save body-parser
		~~~

		+ 引入包
		~~~bash
		let bodyParser = require('body-parser')
		~~~

		+ 配置中间件
		~~~bash
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extened: true }))
		~~~

	+ ```cookie-parser``` 中间件

		+ 安装

		+ 引入包
		~~~bash
		let cookieParser = require("cookie-parser)
		~~~

		+ 配置中间件
		~~~bash
		app.use(cookieParser())
		~~~

	+ ```art-template``` 中间件

		+ 安装 中间件
		~~~bash
		npm install art-template --save
		npm install express-art-template --save
		~~~

		+ 配置中间件
		~~~bash
		app.engine('ext', require("express-art-template"))
		~~~

+ 在 express 中使用模板引擎

	+ 安装对应的模板引擎 
	~~~bash
	npm install --save xxx
	~~~

	+ 通过 ```app.set``` 配置模板引擎

	+ 使用 ```res.render()``` 使用模板引擎
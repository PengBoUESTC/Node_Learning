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

+ 通过命令 ```npm root -g ``` 查看全局安装目录

+ **node 执行 js 文件时，其中的路径为相对于 node 命令执行时的路径**

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

	+ 命令定义格式
	~~~bash
	"scripts":{
	"start": "命令行需要执行的命令",
	"start": "node main.js"
	"prebuild": "" // build 命令执行之前自动执行的命令
	"build": "npx babel src --out-file dist"
	"postbuild": "node ./dist/app.js"  //build 命令执行之后自动执行的命令
	}
	~~~

	+ ```npm run myOrder``` // 当命令名是 ```start``` 时， 可以省略 ``` run ```

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

	+ 文件异步读取
	~~~bash
	fs.readFile(path [, options], (err, data) => {}))
	~~~

	+ 文件内容追加
	~~~bash
	fs.appendFile('path', content, err=>{})
	~~~

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

#### 7.3 ```express``` API

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
	res.render('特定扩展名的文件名')
	~~~

	+ 重定向
	~~~bash
	res.redirect()
	~~~

	+ 发送 ```JSON``` 响应，将数据转换为 JSON 字符串发送
	~~~bash
	res.json()
	~~~

	+ 发送状态码
	~~~bash
	res.status(500).end('message')
	res.sendStatus(500) //与以上代码等效
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


#### 7.4 静态资源

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

	+ 手动封装静态资源中间件
	~~~bash
	app.use('staticPath', static(dirPath))
	// 当 use 中指定了 staticPath 参数时， req 对象中的 path 属性将去除 staticPath 字符串
	// use 中指定了匹配路径， 因此不用手动调用 next() 方法
	function static(dirPath){
		return (req, res, next)=> {
			let urlPath = path.join(dirPath, req.path)
			fs.readFile(urlPath, (err, data)=>{
				if(err){
					return res.end('404 Not Found')
				}
				res.end()
			})
		}
	}
	~~~

#### 7.5 中间件

+ 中间件介绍

	+ 中间件函数是能够在 ```request-response``` 环中能够访问 ```req``` 对象与 ```res``` 对象， 以及下一个中间件函数的的函数

	+ 中间件用来处理 http 请求的一个环节，通过 处理 ```req``` 与 ```res``` 对象。

	+ 中间件可以执行以下功能

		+ 执行代码

		+ 改变 ```req``` 与 ```res``` 对象

		+ 终结 ```request-response``` 环

		+ 调用下一个 中间件函数 （next 参数， 不执行 next 方法， 中间件不会再继续执行）

	+ 中间件几种使用方式

		+ 不关心请求路由，所有的请求都会经过该方法的处理
		~~~bash
		app.use(function(req, res, next){})
		~~~

		+ 根据请求路由，执行 callback
		~~~bash
		app.use('path', function(req, res, next){})
		~~~

		+ 具体路由规则中间件
		~~~bash
		app.get('path', function(req, res){})
		app.post('path', function(req, res){})
		...
		~~~

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

#### 7.6 自定义中间件
	
+ **注意中间件的顺序**

+ 静态资源中间件处理

+ 日志信息记录中间件

+ 404 页面信息处理中间件

+ 全局的错误处理

	+ 记录错误日志 为匿名函数明明可以获取更加具体的错误信息

	+ ```try{}catch(e){}``` 在catch 中记录错误日志

	+ 客户端响应 500 

	+ **Express 中的全局错误处理中间件，该中间件只有带有参数的 next 才能调用到 next(err)**
	~~~bash
	app.use((err, req, res, next)=>{})
	~~~

### 8 nunjucks 模板引擎

#### 8.1 快速开始

+ 安装 nunjucks
~~~bash
npm install nunjucks --save
~~~

+ 引入 nunjucks
~~~bash
const nunjucks = require('nunjucks')
~~~

+ 配置 nunjucks
~~~bash
const app = express()
nunjucks.configure('path', { autoescape: true, express: app })
// path 为模板引擎自动查找文件的目录路径
~~~

#### 8.2 模块化提取

+ ```block``` ： 单个页面模块，如一个```<div>```，不是完整的 html 页面
~~~bash
{% block anchor %}
{% endblock %}
~~~

+ ```include``` : 通过引用模块页构造模板页，留下 “坑”，便于实际页面填充
~~~bash
{% include "file_path" %}
{% block anchor %}
{% endblock %}
~~~

+ ```extend``` ： 通过继承构造页实现实际的```html``` 页面，填充构造页的 “坑”
~~~bash
{% extends "layout_file" %}
{% block anchor %}
{% endblock %}
~~~

### 9 art-template 模板引擎

#### 9.1 快速开始

+ 安装 中间件
~~~bash
npm install art-template --save
npm install express-art-template --save
~~~

+ 配置中间件
~~~bash
app.engine('ext', require("express-art-template"))
~~~

+ **路径问题**: 该模板引擎默认搜索路径为 当前目录下的 views 文件夹，可通过 app.set() 进行修改
~~~bash
app.set('views', '../views') // 设置为父级目录的 views 文件夹
~~~

#### 9.2 模块化提取

+ template inheritance ： 通过继承模板页实现实际的 ```html``` 页面
~~~bash
{{ extend "layOut_filePath" }}
{{ block "anchor" }}
{{ /block }}
~~~

+ Sub template : 通过引用一个个的模块构造模板页
~~~bash 
{{ include "sub_filePath" }}
~~~

### 10 杂项

#### 10.1 手动封装 post 数据获取中间件

+ 当 post 数据量较大时，数据会分多次进行提交

+ 通过 req 对象的事件进行数据的拼接

+ 数据传入时会触发 data 事件
~~~bash
app.use((req, res, next)=>{
	let body = ''
	req.on('data', chunk=>{
		body += chunk
	})
	req.on('end',()={
		//数据的二次处理
		next()
	})
})
~~~

#### 10.2 jsonp

+ 跨域
	
	+ 域名不同， 协议不同， 端口号不同

+ 后端返回的数据，前端会根据**标签**进行解析执行，如img 标签的返回数据会尝试解析为 图片， link 会尝试解析为样式表，而 ```script``` 标签会解析为 js 代码进行执行

+ 什么可以跨域

	+ img 图片标签

		+ 只能获取图片，数据类型受到限制

	+ link 样式表

		+ 将返回数据解析为 css 样式

	+ script 脚本标签

		+ 将想要得到的数据使用**函数**包裹起来之后再以字符串的形式返回

		+ 由于**函数**由前端定义，因此需要通过 **查询字符串** 的方式将 **函数名** 传递给后端。

		+ 只支持 ```get``` 方式的请求

	+ 封装 ```jsonp```

+ 服务端的跨域方式

#### 10.3 nvm 

+ Node Version Management

+ 用于切换 node 版本

+ ```nvm list ``` 查看所有的 安装的node 版本

+ ```nvm insttall x.x.x``` : 安装特定版本的node 

+ ```nvm use x.x.x``` : 切换到特定的 node 版本

#### 10.4 nrm

+ Node Registry manager : 镜像

+ ```npm install nrm -g``` 

+ 使用 nrm 管理镜像源
```bash
nrm use xxx
```

#### 10.5 yarn

+ 由Facebook 推出的，开源的类似于 npm 的包管理工具

+ ```npm install yarn```

+ 使用
~~~bash
npm init 
yarn init 

npm install xxx --save 
yarn add xxx

npm install 
yarn install 

npm uninstall xxx
yarn remove xxx

npm install -g xxx
yarn global add xxx

npm uninstall -g xxx
yarn global remove xxx
~~~

+ 离线安装
~~~bash
yarn add xxx --offline
~~~
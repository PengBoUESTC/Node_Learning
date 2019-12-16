---
title: mongodb
date: 2019-12-08 20:08:08
tags: database
---

### 1 mongodb 数据库

+ 非关系型数据库

+ 数据库、 集合、 文档

+ 官方包 ```mongodb```

### 2 应用

+ 启动 ```mongodb``` 数据库
~~~bash
mongod
// 默认需要 c 盘目录下的 data 文件夹

mongod --dbpath=path 
// 更改默认的数据存储路径
~~~

+ 启动 ```mongodb``` 命令行
~~~bash
mongo
~~~

### 3 在 node 中应用mongodb

+ 安装 ```mongodb```
~~~bash
npm install mongodb --save
~~~

+ 引入包
~~~bash
import mongodb from "mongodb"
const MongoClient = mongodb.MongodbClient
~~~

+ 操作数据库

~~~bash
//url 为 mongodb 的工作地址 mongodb://localhost:27017
MongoClient.connect('url', (err, client)=>{
// 获取（创建数据库）
const db = client.db("database_name")
// 获取（创建集合）
const collection = db.collection("collection_name")
// 根据集合名操作数据库
collection.insertOne(data, (err, result)=>{
		if(err){
			throw err
		}else{
			res.json(result)
		}
	})
// 关闭数据库
client.close()
})
~~~

### 4 mongoose

+ 基于 ```mongodb``` 向上封装的第三方包

+ 安装包
~~~bash
npm install --save mongoose
~~~

+ 引入包
~~~bash
import mongoose from "mongoose"
~~~

+ 应用数据库

	+ 连接数据库
	~~~bash
	// 在 url 中指定数据库名 url = mongodb://localhost/test
	mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
	// connect() 返回一个 pending 状态的连接
	// 为其添加成功提醒与失败警告
	const db = mongoose.connection
	db.on("error", console.log.bind(console, '数据库连接失败！'))
	db.on("open", ()=>{})
	~~~

	+ 创建数据模型```schema```, 将 ```schema``` 编译成 ```model```
	~~~bash
	mySchema = mongoose.Schema({
	name: String
	...
	})
	const Model = mongoose.model("model_name", mySchema)
	// collection_name 会被自动转换， Person -> persons
	// model_name 就是 collection name
	~~~

	+ 为数据模型添加方法，方法必须在 转化为 ```model``` 之前添加到 ```methods``` 中，在数据模型添加的方法会在 ```model``` 的 ```prototype```上，因此通过 ```model``` 得到的数据实例都能使用该方法
	~~~bash
	mySchema.methods.funName = function(){}
	~~~

	+ 使用数据模型生成数据
	~~~bash
	let test_name = new Model(data)
	~~~

	+ 数据库操作；通过操作模型实例上的方法， 将数据存入数据库；通过 ```Model``` 进行数据查询
	~~~bash
	test_name.save((err, result)=>{}) 
	Model.find() 
	~~~
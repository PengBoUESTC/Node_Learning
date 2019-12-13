---
title: babel
date: 2019-12-08 20:07:56
tags: "前端, ES6"
---

### 0 说明

+ babel 是一个工具链，可以将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JS 语法， 

	- 语法转换

	- 通过 Ployfill 方式在目标环境中添加缺失的特性

	- 源码转换 (codemods)

	- ...

+ 由于 babel 应用与开发阶段，项目发布时不需要，因此安装 babel 相关依赖时，通过 ```--save-dev``` 将其记录入 **package.json** ```devDependencies``` 属性

+ bebel 最好安装在项目中，便于项目的移植。但是当仅安装在本地项目中时，将不能在 项目中的 node_modules 外部使用 babel 进行转码, 因此需要配置 package.json 中的 ```scripts ```属性进行转码

	+ 

### 1 配置babel 

+ 添加配置文件 ```.babelrc```, 该文件用于配置转码规则与插件
~~~bash
{
	"presets": [],  // 用于设置转码规则
	"plugins": [],  // 
}
~~~

+ 安装官方的解码规则
~~~bash
npm install --save-dev @babel/preset-env  //安装最新的转码规则
~~~

+ 将安装的 转码规则写入 babelrc 文件 的presets

+ babel 相关工具

	+ 在**项目**安装 Babel,babel/core:应用 bebel API 实现转码必须安装
	~~~bash
	npm install --save-dev @babel/core 
	~~~

	+ 命令行转码工具
	~~~bash
	npm install --save-dev @babel/cli
	~~~  

	+ babel-node ，支持ES6的REPL 环境, 安装 cli 时会自动安装 该工具

	+ babel-register, 改写了 **require** 命令， 只会对 ```require``` 的文件进行转码
	~~~bash
	npm install --save-dev @babel/register
	~~~
	

### 2 常用的命令行转码命令

+ 转码结果输出到bash
~~~bash
npx babel <xxx.js>
~~~

+ 将转码结果写入指定文件
~~~bash
npx babel <xxx.js> --out-file <filename>
npx babel <xxx.js> -o <filename>
~~~

+ 转码整个目录
~~~bash
npx babel <dir> --out-dir <dir_name>
npx babel <dir> -d <dir_name>
~~~

### 3 babel register

	+ 通过 babel register 实现 ES6代码的 实时 转换
	
	+ 1: 安装 @babel/register

	+ 2: 新建一个 xxx.js 文件

	+ 3: 在该文件中引入 @babel/register
	~~~bash
	require("@babel/register")
	~~~

	+ 4: 引入需要转码的文件
	~~~bash
	require("app.js")
	~~~

	+ 5: 注意，babel/register 只会对 require 的模块进行转码， 不会对本文件进行转码


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

### 1 配置babel 

+ 添加配置文件 ```.babelrc```, 该文件用于配置转码规则与插件
~~~bash
{
	"presets": [],  // 用于设置转码规则
	"plugins": [],  // 
}
~~~

+ 在**项目**安装 Babel 
~~~bash
npm install --save-dev @babel/core 
~~~

+ 安装官方的解码规则
~~~bash
npm install --save-dev @babel/preset-env  //安装最新的转码规则
~~~

+ 安装命令行转码工具
~~~bash
npm install --save-dev @babel/cli
~~~  

### 2 常用的命令行转码命令

+ 转码结果输出到bash
~~~bash
npx babel <xxx.js>
~~~
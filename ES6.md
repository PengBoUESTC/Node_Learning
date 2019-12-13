---
title: ES6
date: 2019-12-08 20:04:09
tags: ES6
---

## ES6语法简单介绍

#### 变量定义

#### 解构赋值

#### 字符串新增方法

#### 数组新增方法

#### 函数新增方法

#### 对象新增方法

### 模块化-module

	+ 模块导入方式
	~~~bash
	import { '解构赋值' }  from "module_name"
	~~~
	**这种方式为静态加载，即只加载解构的变量**

	+ 导入模块整体
	~~~bash
	import * as xxx from "modeule_name"
	~~~

	+ export 方式
	~~~bash
	export { m1, m2, ... }
	~~~

	+ 默认导出
	~~~bash
	export default xxx //此时不用知道模块的具体名字，即可通过 import 导入
	import xxx from "module-name" // 不用解构赋值
	~~~
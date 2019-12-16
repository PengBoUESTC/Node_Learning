// 封装JSONP 函数
// jsonp 用于跨域获取数据

/* 
1： 发送跨域请求
2： 后端服务器返回数据
3： 前端将数据按照指定的标签格式进行转换，并执行
	img 尝试转换为图片
	link 尝试转换为 css 样式
	script 尝试转换为 js 代码进行执行
4： 后端通过将数据按照指定函数包裹的方式返回到前端
5： 包裹函数由前端请求连接 以查询字符串的方式发送给后端

jsonp 函数的思想
1： 传入一个对象参数，该对象包含目标服务器、 以及返回数据的 callback 函数
2： 将 callback 函数设置到全局作用域中，使得后端返回的数据能够调用到该函数
3： 在前端创建 script 标签，并按照传入的 url 参数设置 src 属性
4： 将script 部署到前端
5： 数据处理完毕后删除 script 标签
*/

function jsonp(options){
	// 传入的参数为对象，
	/* options {
		url: '',
		success: function(data){},
		type: '' ,
	 }
	*/

	let callbackName = 'callback_' + new Date().getTime()
	// console.log(callbackName)

	// 将添加的 回调函数全部放入 callbacks 属性中防止全局内的命名冲突
	window.callbacks || (window.callbacks = {})
	// 将 success 方法 加入全局环境，才能被后端返回的数据调用
	window.callbacks[callbackName] = function(data){
		options.success(data)

		// 这里由于script 是一个块作用域中的 变量，因此只会remove jsonp 添加的 script 标签
		document.body.removeChild(script)
	}

	let script = document.createElement('script')
	script.src = options.url + `?callback=${callbackName}`
	document.body.appendChild(script)
}

window.jsonp = jsonp

// export default jsonp
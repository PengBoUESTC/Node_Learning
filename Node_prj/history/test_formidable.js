const express = require("express")
const formidable = require("formidable")
const nunjucks = require("nunjucks")

const app = express()

nunjucks.configure('views', { autoescape: true, express: app})

app.get('/', (req, res, next)=>{
	res.render('./test_formidable.html')
})

app.post('/', (req, res, next)=>{
	const form = new formidable.IncomingForm()

	form.uploadDir = './images'
	form.keepExtensions = true

	form.parse(req, (err, fileds, files)=>{
		if(!err){
			res.end('success')
		}
		else{
			res.end('wrong')
		}
	})
})

app.listen(3000, ()=>{
	console.log('runing...')
})
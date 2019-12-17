import express from "express"

const indexRouter = express.Router()

indexRouter.get('/', (req, res, next)=>{
	try{
		res.render('index.html')
	}
	catch(e){
		next(e)
	}
})

export default indexRouter
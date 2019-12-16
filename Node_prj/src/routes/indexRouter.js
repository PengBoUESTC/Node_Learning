import express from "express"

const indexRouter = express.Router()

router.get('/', (req, res, next)=>{
	try{
		res.render('index.html')
	}
	catch(e){
		next(e)
	}
})

export default indexRouter
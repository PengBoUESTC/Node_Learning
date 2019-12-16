import express from "express"
import Advert from "../models/advert"

const advertRouter = express.Router()
// 呈现广告管理页面
router.get('/advert_list', (req, res, next)=>{
	try{
		res.render('advert_list.html')
	}catch(e){
		res.sendStatus(500)
		next(e)
	}
})

// 呈现广告添加页面
router.get('/advert/add', (req, res, next)=>{
	try{
		res.render('advert_add.html')
	}catch(e){
		res.sendStatus(500)
		next(e)
	}
})

// 处理广告添加信息表单数据,进行数据库的操作
router.post('/advert/add', (req, res, next)=>{
	try{
		let message = new Advert({
			title: req.body.title,
			picture: req.body.picture,
			start_time: req.body.sTime,
			end_time: req.body.eTime,
			last_modified: req.body.last_modified,
		})
		message.save((err, result)=>{
			if(!err){
				res.json({err_code: 0})
			}else{
				return next(err)
			}
		})
	}catch(e){
		next(e)
	}
})

// 返回数据库中的数据
router.get('/advert/list', (req, res, next)=>{
	try{
		Advert.find((err, docs)=>{
			if(err){
				return next(err)
			}else{
				res.json(docs)
			}
		})
	}catch(e){
		next(e)
	}
})

// 返回指定的数据
router.get('/advert/id/:advertId', (req, res, next)=>{
	try{
		let id = req.params.advertId
		Advert.find({ _id : id}, (err, docs)=>{
			if(err){
				return next(err)
			}else{
				res.json(docs)
			}
		})
	}catch(e){
		next(e)
	}
	
})

// 数据修改，根据ID 修改
router.post('/advert/modify/:advertId', (req, res, next)=>{
	let id = req.params.advertId
	Advert.findById(id, (err, advert)=>{
		if(err){
			return next(err)
		}

		advert.title = req.body.title
		advert.picture = req.body.picture
		advert.start_time = req.body.sTime
		advert.end_time = req.body.eTime
		advert.last_modified = Date.now()

		advert.save((err, result)=>{
			if(err){
				return next(err)
			}
			res.json(result)
		})
	})
})

//数据删除
router.get('/advert/remove/:advertId', (req, res, next)=>{
	try{
		let id = req.params.advertId
		Advert.remove({ _id: id }, err=>{
			if(err){
				return next(err)
			}else{
				res.json({ err_code: 0 })
			}
		})
	}catch(e){
		next(e)
	}
})

export default advertRouter
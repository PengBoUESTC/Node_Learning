import mongodb from "mongodb"

// 数据库操作
const MongoClient = mongodb.MongoClient
const url = "mongodb://localhost:27017"

export default (errData, req, res, next)=>{
	// 将错误信息存储在数据库中
	// 
	const date = new Date()
	if(errData){
		const err_obj = {}
		err_obj.errName = errData.name
		err_obj.errTime = errData.time
		err_obj.errStack = errData.stack

		MongoClient.connect(url,(err, client)=>{
			if(err){
				console.log('数据库连接错误...')
			}
			const db = client.db("myNodeData")
			const collection = db.collection("err_logs")

			collection.insertOne(err_obj, (err, result)=>{
				err? '':res.json({code: 500, message: errData.message})
			})

			client.close()
		})
	}
}
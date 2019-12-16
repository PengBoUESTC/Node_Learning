import mongoose from "mongoose"

// 通过 url 指定连接的数据库
mongoose.connect("mongodb://localhost/myNodeData", {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

// db.on("error", console.log('数据库连接错误...'))

db.on("open", ()=>{console.log('数据库连接成功...')})

// 创建schema 
const advertSchema = mongoose.Schema({
	title: { type: String, required: true },
	picture: { type: String, required: true },
	start_time: { type: Date, required: true },
	end_time: { type: Date, required: true },
	last_modified: { type: Date, default: Date.now }
})

// 将schema 转化为 model 并导出
// 注意此时collection 的名称为 adverts 
export default mongoose.model("Advert", advertSchema)
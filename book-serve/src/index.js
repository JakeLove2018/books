const Koa = require("koa");
const app = new Koa()
const registerRouter = require('./routes/index.js')
registerRouter(app)
app.listen(3000,()=>{
    console.log("服务器启动成功了")
})
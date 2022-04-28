const Koa = require("koa");
const app = new Koa();
const registerRouter = require('./routes/index.js')
const { connect } = require('./db/index.js');
const cors = require('@koa/cors');
const koaBody = require("koa-body");
connect().then(()=>{
    app.use(cors());
    app.use(koaBody());
    registerRouter(app);
    
    app.listen(3000,()=>{
        console.log("服务器启动成功了")
    })
})

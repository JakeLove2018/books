const Router = require('@koa/router'); // 引入koa路由
const mongoose = require('mongoose'); // 引入mongoodb数据库
require('../../db/index.js') // 引入数据库连接文件
const { getBody } = require('../../helpers/utils/index.js'); //引入公共方法
const InviteCode = mongoose.model('InviteCode') // 引入Schema模型.
const {v4:uuidv4} = require('uuid');
const router = new Router({ // 创建主路由。
    prefix:"/invite"
})
router.get('/add',async(ctx)=>{
    const code = new InviteCode({
        code:uuidv4(),
        user:"",
    })
    const saved = await code.save();
    ctx.body = {
        code:1,
        data:saved,
        msg:"邀请码创建成功",
    }
})
// 注册路由信息

module.exports = router;
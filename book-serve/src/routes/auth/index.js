const Router = require('@koa/router'); // 引入koa路由
const mongoose = require('mongoose'); // 引入mongoodb数据库
require('../../db/index.js') // 引入数据库连接文件
const { getBody } = require('../../helpers/utils/index.js'); //引入公共方法
const User = mongoose.model('User') // 引入Schema模型.
const jwt = require('jsonwebtoken'); // 引入jwt登录生成器
const InviteCode = mongoose.model('InviteCode');//
const router = new Router({ // 创建主路由。
    prefix:"/auth"
})
// 注册路由信息

router.post('/register',async(ctx)=>{
    const {account,password,inviteCode} = getBody(ctx);
    const findCode = await InviteCode.findOne({
        code:inviteCode,
    }).exec()
    if((!findCode) || inviteCode.user){
        ctx.body = {
            code:0,
            msg:"邀请码不正确",
            data:null,
        }
        return ;
    };
    const findUser = await User.findOne({
        account,
    }).exec();
    if(account === '' || password === '' || inviteCode === ''){
        ctx.body = {
            code:0,
            msg:"字段不能为空",
            // data:null,
        }
        return ;
    };
    if(findUser){
        ctx.body = {
            code:0,
            msg:"用户被注册",
            data:null,
        }
        return 
    }
    const user = new User({
        account,
        password,
    })
    const res = await user.save();
    findCode.user = res._id;
    findCode.meta.updateAt = +new Date().getTime();

    await findCode.save();
    ctx.body = {
        code:1,
        msg:"注册成功",
        data:res,
    }
})
router.post('/login',async(ctx)=>{
    const {account,password } = getBody(ctx);
    const one = await User.findOne({
        account,
    }).exec();
    if(account === '' || password === ''){
        ctx.body = {
            code:0,
            msg:"字段不能为空",
            // data:null,
        }
        return ;
    };
    if(!one){
        ctx.body = {
            code:0,
            msg:"用户名或者密码错误",
            data:null
        }
        return ;
    };
    const user = {
        account:one.account,
        id:one._id,
    }
    if(one.password === password){
        ctx.body = {
            code:1,
            msg:"登陆成功",
            data:{
                user,
                token:jwt.sign(user,'book-serve'),

            }
        }
        return ;
    };
    ctx.body = {
        code:0,
        msg:"用户名或者密码错误",
        data:null
    }
    
})

module.exports = router;
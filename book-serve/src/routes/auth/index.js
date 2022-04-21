const Router = require('@koa/router');

const router = new Router({
    prefix:"/auth"
})
router.post('/register',async(ctx)=>{
    ctx.body = '注册成功'
})
router.post('/login',async(ctx)=>{
    ctx.body = '登录成功'
})

module.exports = router;
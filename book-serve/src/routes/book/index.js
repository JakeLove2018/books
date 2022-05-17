const Router = require('@koa/router');
const mongoose = require('mongoose');
const Book = mongoose.model('Book');
const {getBody} = require('../../helpers/utils/index.js')
const router = new Router({
    prefix:'/book',
})
router.post('/add',async (ctx)=>{
   const {
    name,
    price,
    author,
    publishData,
    classify,
   } =  getBody(ctx)
   const book = new Book({
    name,
    price,
    author,
    publishData,
    classify,
   })
   const res = await book.save();
   ctx.body = {
        data:res,
        code:1,
        msg:"添加书籍成功"
    }
    router.get('/list',async(ctx)=>{
        const list = await Book.find().exec();
        ctx.body = {
            data:list,
            code:1,
            msg:"获取列表成功"
        }
    })
})
module.exports = router
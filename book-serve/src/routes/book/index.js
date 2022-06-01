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
    router.get('/list',async (ctx)=>{
        const query ={}
        const { page = 1, keyword = '' } = ctx.query;
        let { size = 10 } = ctx.query;
        size = Number(size);
        if(keyword){
            query.name = keyword;
        }    
        const list = await Book.find(query).skip((page - 1) * size).limit(size).exec(); // 新增分页方法,查询数据库。
        const total = await Book.countDocuments(); //获取总数
        ctx.body = {
            data:{
                total,
                list,
                page,
                size
            },
            code:1,
            msg:"获取列表成功"
        }
    })
    // 删除接口,删除数据库中的数据
    router.delete('/:id',async (ctx)=>{
        const { id } = ctx.params;
        const res = await Book.deleteOne({_id:id});
        ctx.body = {
            data:res,
            code:1,
            msg:"删除成功"
        }
    })
})
module.exports = router
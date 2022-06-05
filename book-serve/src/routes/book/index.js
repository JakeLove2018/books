const Router = require('@koa/router');
const mongoose = require('mongoose');
const Book = mongoose.model('Book');
const {getBody} = require('../../helpers/utils/index.js')
const BOOK_COUNT = {
    IN: 'IN_COUNT',
    OUT: 'OUT_COUNT',
};
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
    count,
   } =  getBody(ctx)
   const book = new Book({
    name,
    price,
    author,
    publishData,
    classify,
    count,
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
    });
    // 入库出库操作,更新数据库中的数据
    router.post('/update/count',async(ctx)=>{
        const { id,type } = ctx.request.body;
        let { num } = ctx.request.body;
        num = Number(num);
        const book = await Book.findOne({_id:id});
        if(!book){
            ctx.body = {
                data: book,
                code: 0,
                msg: "没有找到书籍"
            };
            return;
        }
        if(type === BOOK_COUNT.IN){
            num = Math.abs(num);
        }else{
            num = -Math.abs(num);
        }
        book.count  = book.count + num;
        if(book.count < 0){
            ctx.body = {
                code:0,
                msg:"库存余量不足",
            }
            return;
        };
        const res = await book.save() // 更新数据库;
        ctx.bodu = {
            data:res,
            msg:"操作成功",
            code:1,
        }
       
    })
})
module.exports = router
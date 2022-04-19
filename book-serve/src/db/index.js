const mongoose = require('mongoose');
    //Schema集合
    //model模型
const userSchema = new mongoose.Schema({
    nickName:String,
    password:String,
    age:Number,
})

const UserModel = mongoose.model('User',userSchema);

const connect = ()=>{
    // 连接数据库并创建数据库;
    mongoose.connect('mongodb://127.0.0.1:27017/books')
    //监听数据库打开的回调函数;
    mongoose.connection.on('open',()=>{
        console.log("数据路连接成功")
        const user = new UserModel({
            nickName:"小明",
            password:"123456",
            age:12,
        })
        user.age = 99;
        user.save()    
    })
}

// module.exports = {
//     connect
// }
connect();
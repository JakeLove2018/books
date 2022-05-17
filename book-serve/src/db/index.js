const mongoose = require('mongoose');
require('./Schemas/User.js');
require('./Schemas/InviteCode.js');
require('./Schemas/Book.js');
const connect = () => {
    return new Promise((resolve) => {
        // 连接数据库并创建数据库;
        mongoose.connect('mongodb://127.0.0.1:27017/books')
        //监听数据库打开的回调函数;
        mongoose.connection.on('open', () => {
            console.log("数据路连接成功")
            resolve();
        })
    })
}
module.exports = {
    connect,
}
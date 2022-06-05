const { getMeta } = require('../helper.js');
const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    // 图书名称
    name:String,
    // 图书简介
    price:Number,
    // 图书作者
    author:String,
    // 图书出版日期
    publishData:String,
    // 图书分类
    classify:String,
    // 时间
    meta:getMeta(),
    // 图书库存
    count:Number,
})

mongoose.model('Book',BookSchema);
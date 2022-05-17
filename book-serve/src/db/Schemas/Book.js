const { getMeta } = require('../helper.js');
const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    name:String,
    price:Number,
    author:String,
    publishData:String,
    classify:String,
    meta:getMeta(),
})

mongoose.model('Book',BookSchema);
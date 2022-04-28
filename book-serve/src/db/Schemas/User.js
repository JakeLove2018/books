const { getMeta } = require('../helper.js');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    account: String,
    password: String,
    meta:getMeta(),
})

mongoose.model('User',UserSchema);
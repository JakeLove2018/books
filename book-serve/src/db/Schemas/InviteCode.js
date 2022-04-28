const { getMeta } = require('../helper.js');
const mongoose = require('mongoose');
const InviteCodeSchema = new mongoose.Schema({
    code:String,
    user:String,
    meta:getMeta(),
})

mongoose.model('InviteCode',InviteCodeSchema);
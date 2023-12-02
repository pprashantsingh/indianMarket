const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userEmail:String,
    orderProductCollection:Array
})

module.exports = new mongoose.model('orderModel',Schema)
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userEmail:String,
    productCollectionId:Array
})

module.exports = new mongoose.model('cartModel',Schema)
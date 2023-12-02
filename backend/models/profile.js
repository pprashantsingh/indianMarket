const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userName:String,
    email:String,
    contactNumber:Number
})

module.exports = new mongoose.model('profileModel',Schema)
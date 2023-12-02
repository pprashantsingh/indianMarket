const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    contactNumber:Number, 
    imageName:String
})

module.exports = new mongoose.model('adminmodel',Schema)
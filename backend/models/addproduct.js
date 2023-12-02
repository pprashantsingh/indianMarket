const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    productType:String,
    productName:String,
    productPrice:Number,
    productStorage:String,
    productImage:String,
    networktype:String,
    displaysize: String,
    rearcamera: String,
    frontcamera: String,
    operatingsystem: String,
    color: String,
    ModelName: String,
    Warranty:String,
    modeOfProduct:String,
    Productsize:String,
    RemoteSupport:String,
    PowerConsumption:String,
    BodyMaterial:String,
    CountryOfOrigin:String,
    Pack:String,
    Pattern:String,
    Type:String,
    ProductMaterial:String,
    Brand:String,
    productSize:String,
    productStatus:String,
    imgUrl:String,
    NumberOfProduct:String
})

module.exports = new mongoose.model('productModel',Schema)
const orderModel = require('../models/orderProduct')
const productModel = require("../models/addproduct");
require('dotenv').config()

exports.addOrderProduct = async (req, res,next) => {
    try {
        let userEmail = req.email
        let productId = req.body.productId
        let name = req.body.name
        let contact = req.body.contact
        let houseNO = req.body.houseNO
        let street = req.body.street
        let pincode = req.body.pincode
        let city = req.body.city
        let state = req.body.state
        let mode = req.body.mode
        let QtyofProduct = req.body.QtyofProduct
        let productprice = req.body.totalProductPrice
        let deliveryDate = req.body.deliveryDate
        let productName = req.body.productName
        let orderDate = req.body.orderDate

        let checkUserEmail = await orderModel.findOne({ userEmail: userEmail })

        if (!checkUserEmail) {
            let obj = {
                userEmail: userEmail,
                orderProductCollection: { productId: productId, name: name, contact: contact, houseNO: houseNO, street: street, pincode: pincode, city: city, state: state, mode: mode, QtyofProduct: QtyofProduct,productprice:productprice,deliveryDate:deliveryDate,productName:productName,orderDate:orderDate}
            }

            await orderModel.create(obj)

            req.body={
                email:userEmail,
                productName:productName,
                productPrice:productprice,
                deliveryDate:deliveryDate,
                orderdate:orderDate
            }
            next();
        } else {
            let obj = {
                userEmail: userEmail,
                orderProductCollection: [...checkUserEmail.orderProductCollection, { productId: productId, name: name, contact: contact, houseNO: houseNO, street: street, pincode: pincode, city: city, state: state, mode: mode, QtyofProduct: QtyofProduct,productprice:productprice,deliveryDate:deliveryDate,productName:productName,orderDate:orderDate}]
            }

            await orderModel.findByIdAndUpdate(checkUserEmail._id, obj, { new: true })

            req.body={
                email:userEmail,
                productName:productName,
                productPrice:productprice,
                deliveryDate:deliveryDate,
                orderdate:orderDate
            }
            next();
        }
    } catch (error) {
        console.log(error)
    }
}

exports.getOrderData = async (req, res) => {
    let myorderCollection = []
    try {
        let orderData = await orderModel.find({ userEmail: req.email })
        for(let data of orderData){
            for(let ele of data.orderProductCollection){
                let proData = await productModel.findOne({_id:ele.productId})

                ele['imgUrl'] = process.env.URL + proData._id + '/' + proData.productImage
                
                myorderCollection.push(ele)

            }
        }        

        res.status(200).json({
            error: false,
            data:myorderCollection
        })

    } catch (error) {
        console.log(error)
    }
}
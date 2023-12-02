const productModel = require("../models/addproduct");
require('dotenv').config()

exports.addProduct = async (req, res) => {
    try {
        const obj = {
            productType: req.body.productType,
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productStorage: req.body.productStorage,
            productImage: req.body.productImage,
            networktype: req.body.networktype,
            displaysize: req.body.displaysize,
            rearcamera: req.body.rearcamera,
            frontcamera: req.body.frontcamera,
            operatingsystem: req.body.operatingsystem,
            color: req.body.color,
            ModelName: req.body.ModelName,
            Warranty: req.body.Warranty,
            modeOfProduct: req.body.modeOfProduct,
            Productsize: req.body.Productsize,
            RemoteSupport: req.body.RemoteSupport,
            PowerConsumption: req.body.PowerConsumption,
            BodyMaterial: req.body.BodyMaterial,
            CountryOfOrigin: req.body.CountryOfOrigin,
            Pack: req.body.Pack,
            Pattern: req.body.Pattern,
            Type: req.body.Type,
            ProductMaterial: req.body.ProductMaterial,
            Brand: req.body.Brand,
            productSize: req.body.productSize,
            productStatus: req.body.productStatus,
            NumberOfProduct: req.body.NumberOfProduct
        }

        const data = await productModel.create(obj)

        res.status(201).json({
            error: false,
            data: data
        })

    } catch (error) {
        console.log(error)
    }
}


exports.getProduct = async (req, res) => {
    count = 0;
    try {
        const productData = await productModel.find();
        const totalProduct = await productModel.count();

        productData.forEach((item) => {
            if (item.productStatus == 'Active') {
                count = count + 1;
            }
            item['imgUrl'] = process.env.URL + item._id + '/' + item.productImage
        })

        res.status(200).json({
            error: false,
            data: productData,
            totalProduct: totalProduct,
            avilableProduct: count
        })

    } catch (error) {
        console.log(error)
    }
}


exports.updateProduct = async (req, res) => {
    try {
        productId = req.params.id

        const updateData = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productStorage: req.body.productStorage,
            productImage: req.body.productImage,
            networktype: req.body.networktype,
            displaysize: req.body.displaysize,
            rearcamera: req.body.rearcamera,
            frontcamera: req.body.frontcamera,
            operatingsystem: req.body.operatingsystem,
            color: req.body.color,
            ModelName: req.body.ModelName,
            Warranty: req.body.Warranty,
            modeOfProduct: req.body.modeOfProduct,
            Productsize: req.body.Productsize,
            RemoteSupport: req.body.RemoteSupport,
            PowerConsumption: req.body.PowerConsumption,
            BodyMaterial: req.body.BodyMaterial,
            CountryOfOrigin: req.body.CountryOfOrigin,
            Pack: req.body.Pack,
            Pattern: req.body.Pattern,
            Type: req.body.Type,
            ProductMaterial: req.body.ProductMaterial,
            Brand: req.body.Brand,
            productSize: req.body.productSize,
            productStatus: req.body.productStatus,
            NumberOfProduct: req.body.NumberOfProduct
        }

        await productModel.findByIdAndUpdate(productId, updateData)

        res.status(200).json({
            error: false
        })

    } catch (error) {
        res.send({ error: true })
    }
}

exports.updateOrderProduct = async (req, res) => {
    try {
        productId = req.params.id

        let quantity = req.body.NumberOfProduct

        let data = await productModel.findOne({ _id: productId });

        const updateData = {
            NumberOfProduct: data.NumberOfProduct - quantity
        }
        console.log(updateData)

        await productModel.findByIdAndUpdate(productId, updateData)

        res.status(200).json({
            error: false
        })
    } catch (error) {
        res.send({ error: true })
    }

}

exports.deleteProduct = async (req, res) => {
    try {
        productId = req.params.id

        await productModel.findByIdAndRemove(productId)

        res.status(200).json({
            error: false
        })
    } catch (error) {
        console.log(error)
    }
}

exports.uploadImg = (req, res) => {
    try {
        const file = req.file;
        res.send({ error: false })
    } catch (err) {
        res.send({ error: true })
    }
}

let searchData = []
exports.getfilterProduct = async (req, res) => {
    try {
        if (searchData.length > 0) {
            searchData.splice(0, 1)
        }
        const searchValue = req.body.searchValue;
        const data = await productModel.find({ productType: searchValue })

        data.forEach((item) => {
            item['imgUrl'] = process.env.URL + item._id + '/' + item.productImage
        })

        searchData.push([data])
        res.send({ searchData, error: false })

    } catch (error) {
        res.send({ error: true })
    }
}

exports.getSearchProduct = async (req, res) => {
    try {
        res.send({ searchData, error: false })
    } catch (error) {
        res.send({ error: true })
    }
}
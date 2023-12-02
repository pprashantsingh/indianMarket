const profileModel = require("../models/profile")
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.addProfile = async (req, res) => {
    try {
        let existUser = await profileModel.findOne({ email: req.body.email })
        
        if (existUser) {
            res.status(200).json({
                msg:"This email is already exist"
            })
        } else {
            const obj = {
                userName: req.body.userName,
                email: req.body.email,
                contactNumber: req.body.contactNumber
            }
            await profileModel.create(obj)

            res.status(200).json({
                error: false
            })
        }
    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}

exports.getProfileData = async (req, res) => {
    try {
        let email = req.email
        let userData = await profileModel.findOne({email})

        res.status(200).json({
            error: false,
            data:userData
        })

    } catch (error) {
        res.status(500).json({
            error: true
        })
    }
}


exports.loginUser = async (req, res) => {
    try {
        let existUser = await profileModel.findOne({ email: req.body.email })

        if (existUser) {

            const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY)

            res.status(200).json({
                token: token,
                error: false
            })

        } else {
            res.status(200).json({
                msg: 'you are not a registered user'
            })
        }
    } catch (error) {
        console.log(error)
    }
}
const jwt = require('jsonwebtoken');
require('dotenv').config();
const profilemodel=require('../models/profile')

exports.verifyToken = (req, res, next) => {
    console.log(req.headers,"55a")
    const beararToken = req.headers.authorization

    if (beararToken) {

        const token = beararToken.split(' ')[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, reasponse) => {
            if (err) {
                res.status(200).json({ message: "Invalid Token" })
             } else {
                req._id=reasponse._id;
                next();
            }
        })
    } else {
        res.status(200).json({
            msg: 'token not found'
        })
    }
}


exports.verifyToken2 = (req, res, next) => {
    const beararToken = req.headers.authorization.split(' ')[1]

    if (beararToken) {

        jwt.verify(beararToken, process.env.SECRET_KEY, async (err, reasponse) => {
            if (err) {
                res.status(200).json({ message: "Invalid Token" })
             } else {
                req.email=reasponse.email;
                next();

                // let data = await profilemodel.find({email:req.email});
            }
        })
    } else {
        res.status(200).json({
            msg: 'You are not logged in'
        })
    }
}
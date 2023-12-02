const adminmodel = require('../models/addadmin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req,res)=>{
    try {
        let existAdmin = await adminmodel.findOne({ email: req.body.email })

        if (existAdmin) {

            const comparePass = await bcrypt.compare(req.body.password,existAdmin.password);

            if(comparePass){

                const token = jwt.sign({_id:existAdmin._id},process.env.SECRET_KEY)

                res.status(200).json({
                    token: token,
                    error:false
                })
            }else{
                res.status(200).json({
                    error:true
                })
            }
        }else{
            res.status(401).json({
                msg: 'Unauthorized User'
            })
        }
    } catch (error) {
        console.log(error)
    }
}
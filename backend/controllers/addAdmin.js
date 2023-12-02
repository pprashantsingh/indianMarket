const adminmodel = require('../models/addadmin');
const bcrypt = require('bcrypt');

exports.addAdmin = async (req, res) => {
    try {
        let existAdmin = await adminmodel.findOne({ email: req.body.email })

        if (existAdmin) {
            res.status(409).json({
                error:true
            })
        }else{
            const hashPassword = await bcrypt.hash(req.body.password, 10);

            const adminObj = {
                fullName: req.body.fullName,
                email: req.body.email,
                password: hashPassword,
                contactNumber: req.body.contactNumber
            }

            await adminmodel.create(adminObj);

            res.status(201).json({
                error:false
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const nodemailer = require("nodemailer");
const profileModel = require("../models/profile");
var moment = require('moment');

exports.sendMail = async(req, res) => {

    let customerMail = req.body.email
    let orderCollection = await profileModel.findOne({email:req.body.email})
    let customerName = orderCollection.userName

    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "indianmarket221011@gmail.com",
            pass: "wfdyckihvxeyonql"
        },
    });
    
    productName=req.body.productName
    productPrice = req.body.productPrice 
    orderdate = moment(req.body.orderdate).format('DD/MM/YYYY');
    deliveryDate = moment(req.body.deliveryDate).format('DD/MM/YYYY');

    const mailOptions = {
        from: "indianmarket221011@gmail.com",
        to: customerMail,
        subject: "Order Product",
        html: `<p>Dear ${customerName},<br/><br/> You have order ${productName} of ₹${productPrice} order on ${orderdate} Which is deliver on your Address on ${deliveryDate}.<br/> Thanks Shopping with Indian Market.<br/><br/><br/>Regards<br/><br/>Indian Market</p>`
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.status(200).json({
                error: true
            })
        } else {
            res.status(200).json({
                error:false
            })
        }
    });
}
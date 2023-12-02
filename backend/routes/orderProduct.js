const router = require('express').Router();
const controller = require('../controllers/orderProduct')
const auth=require('../middleware/auth')

const sendMail = require('../helper/nodemailer')

router.post('/add/orderProduct',auth.verifyToken2,controller.addOrderProduct,sendMail.sendMail)
router.get('/get/orderDetail',auth.verifyToken2,controller.getOrderData)

module.exports = router;
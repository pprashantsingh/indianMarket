const router = require("express").Router();
const controller = require('../controllers/cart')
const auth = require('../middleware/auth')

router.get('/credential', auth.verifyToken2,controller.sendReasponse)
router.get('/userCartData', auth.verifyToken2,controller.getcartData)
router.post('/add/cart', auth.verifyToken2 ,controller.addToCart)
router.post('/deleteCartData', auth.verifyToken2,controller.removeCartData)

module.exports = router;
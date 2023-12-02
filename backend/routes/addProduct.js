const router = require('express').Router();
const controller = require('../controllers/addProduct')
const auth = require('../middleware/auth');
const upload = require('../helper/helper');

router.post('/add/product', auth.verifyToken, controller.addProduct);
router.get('/getall/product',controller.getProduct);
router.post('/getfilter/product',controller.getfilterProduct);
router.get('/getfilter/product',controller.getSearchProduct);
router.put('/update/product/:id', auth.verifyToken, controller.updateProduct);
router.delete('/delete/product/:id', auth.verifyToken, controller.deleteProduct);

router.post('/add/productImage',upload.single('file'),controller.uploadImg)

router.put('/update/orderproduct/:id',controller.updateOrderProduct);

module.exports = router;
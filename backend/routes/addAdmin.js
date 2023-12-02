const router = require('express').Router();
const controller = require('../controllers/addAdmin')
const auth = require('../middleware/auth');

router.post('/add/admin',auth.verifyToken,controller.addAdmin);

module.exports = router;
const router = require('express').Router();
const controller = require('../controllers/profile')
const auth=require('../middleware/auth')

router.post('/add/profile', controller.addProfile);
router.post('/loginuser', controller.loginUser);
router.get('/add/getprofile', auth.verifyToken2,controller.getProfileData); 

module.exports = router;
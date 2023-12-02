const router = require("express").Router();
const controller = require('../controllers/login')

router.post('/auth/login',controller.login)

module.exports = router;
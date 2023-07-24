const express =require('express')
const router = express.Router()
const logOutController = require('../controller/logoutController')

router.get('/',logOutController.handleLogout)

module.exports = router
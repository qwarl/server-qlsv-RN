const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

// router.post('/checkLogin', adminController.login);
router.get('/',adminController.getInfo);
router.get('/:idAdmin',adminController.getAdminById);
router.post('/login',adminController.login);
module.exports = router;
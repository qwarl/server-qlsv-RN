const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

// router.post('/checkLogin', adminController.login);
router.get('/',adminController.getInfo);
// router.get('/:idAdmin',adminController.getAdminById);
router.post('/login',adminController.login);
router.post('/delSubAccount',adminController.delSubAccount);
// router.post('/updateInfo',adminController.updateInfo);

module.exports = router;
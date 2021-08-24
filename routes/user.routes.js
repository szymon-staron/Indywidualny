const express = require('express');
const router = express.Router();
const verify = require('../controllers/verifyToken');

const authController = require('../controllers/authController');

router.post('/user/register', authController.register);
router.post('/user/login', authController.login);
router.get('/user/login',verify, authController.getUser);

module.exports = router;



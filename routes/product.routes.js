const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController');

router.get('/products', ProductController.getAll);
router.get('/discountProducts', ProductController.getDiscount);
router.post('/products',ProductController.postProduct);
module.exports = router;

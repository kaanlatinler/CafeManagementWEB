const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/GetAllProducts', productController.GetProducts);
router.get('/GetProductById/:id', productController.GetProductById);
router.post('/AddProduct', productController.CreateProduct);
router.put('/UpdateProductById/:id', productController.UpdateProductById);
router.delete('/DeleteProductById/:id', productController.DeleteProductById);

module.exports = router;
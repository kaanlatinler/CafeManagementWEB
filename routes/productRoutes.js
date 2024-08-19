const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/GetAllProducts', authenticateToken, productController.GetProducts);
router.get('/GetProductById/:id', authenticateToken, productController.GetProductById);
router.post('/AddProduct', authenticateToken, productController.CreateProduct);
router.put('/UpdateProductById/:id', authenticateToken, productController.UpdateProductById);
router.delete('/DeleteProductById/:id', authenticateToken, productController.DeleteProductById);

module.exports = router;
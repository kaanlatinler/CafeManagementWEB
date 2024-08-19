const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/GetAllOrders', authenticateToken, orderController.GetOrders);
router.get('/GetOrderById/:id', authenticateToken, orderController.GetOrderById);
router.post('/AddOrder', authenticateToken, orderController.CreateOrder);
router.put('/UpdateOrderById/:id', authenticateToken, orderController.UpdateOrderById);
router.delete('/DeleteOrderById/:id', authenticateToken, orderController.DeleteOrderById);

module.exports = router;
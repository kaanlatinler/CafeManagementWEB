const express = require('express');
const router = express.Router();
const orderDetailsController = require('../controllers/orderDetailsController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/GetAllOrderDetails', authenticateToken, orderDetailsController.GetOrderDetails);
router.get('/GetOrderDetailById/:id', authenticateToken, orderDetailsController.GetOrderDetailById);
router.post('/AddOrderDetail', authenticateToken, orderDetailsController.CreateOrderDetail);
router.put('/UpdateOrderDetailById/:id', authenticateToken, orderDetailsController.UpdateOrderDetailById);
router.delete('/DeleteOrderDetailById/:id', authenticateToken, orderDetailsController.DeleteOrderDetailById);

module.exports = router;
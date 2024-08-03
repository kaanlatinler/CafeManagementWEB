const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/GetAllOrders', orderController.GetOrders);
router.get('/GetOrderById/:id', orderController.GetOrderById);
router.post('/AddOrder', orderController.CreateOrder);
router.put('/UpdateOrderById/:id', orderController.UpdateOrderById);
router.delete('/DeleteOrderById/:id', orderController.DeleteOrderById);

module.exports = router;
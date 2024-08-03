const express = require('express');
const router = express.Router();
const orderDetailsController = require('../controllers/orderDetailsController');

router.get('/GetAllOrderDetails', orderDetailsController.GetOrderDetails);
router.get('/GetOrderDetailById/:id', orderDetailsController.GetOrderDetailById);
router.post('/AddOrderDetail', orderDetailsController.CreateOrderDetail);
router.put('/UpdateOrderDetailById/:id', orderDetailsController.UpdateOrderDetailById);
router.delete('/DeleteOrderDetailById/:id', orderDetailsController.DeleteOrderDetailById);

module.exports = router;
const OrderDetails = require('../models/orderDetails');

exports.GetOrderDetails = async (req, res, next) => {
  try {
    const orderDetails = await OrderDetails.findAll();
    res.status(200).json(orderDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.GetOrderDetailById = async (req, res, next) => {
  try {
    const orderDetail = await OrderDetails.findByPk(req.params.id);
    if (!orderDetail) {
      return res.status(404).json({ message: 'Order detail not found' });
    }
    res.status(200).json(orderDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.CreateOrderDetail = async (req, res, next) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    const orderDetail = await OrderDetails.create(
      { order_id, product_id, quantity, price }
    );
    res.status(201).json(orderDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.UpdateOrderDetailById = async (req, res, next) => {
  try {
    const orderDetail = await OrderDetails.findByPk(req.params.id);
    if (!orderDetail) {
      return res.status(404).json({ message: 'Order detail not found' });
    }
    const { order_id, product_id, quantity, price } = req.body;
    await orderDetail.update({ order_id, product_id, quantity, price });
    res.status(200).json(orderDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.DeleteOrderDetailById = async (req, res, next) => {
  try {
    const orderDetail = await OrderDetails.findByPk(req.params.id);
    if (!orderDetail) {
      return res.status(404).json({ message: 'Order detail not found' });
    }
    await orderDetail.destroy();
    res.status(200).json({ message: 'Order detail deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
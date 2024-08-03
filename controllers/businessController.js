const Business = require('../models/business');

exports.GetBusinesses = async (req, res, next) => {
  try {
    const businesses = await Business.findAll();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.GetBusinessById = async (req, res, next) => {
  try {
    const business = await Business.findByPk(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json(business);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.CreateBusiness = async (req, res, next) => {
  try {
    const { name, owner, phone, address, email } = req.body;
    const business = await Business.create(
        { name, owner, phone, address, email }
    );
    res.status(201).json(business);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.UpdateBusiness = async (req, res, next) => {
  try {
    const business = await Business.findByPk(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    const { name, owner, phone, address, email } = req.body;
    await business.update({ name, owner, phone, address, email });
    res.status(200).json(business);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.DeleteBusiness = async (req, res, next) => {
  try {
    const business = await Business.findByPk(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    await business.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
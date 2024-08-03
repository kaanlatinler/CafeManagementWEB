const Table = require('../models/table');

exports.GetTables = async (req, res, next) => {
  try {
    const tables = await Table.findAll();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.GetTableById = async (req, res, next) => {
  try {
    const table = await Table.findByPk(req.params.id);
    if (!table) {
      return res.status(404).json({ message: 'Table not found' });
    }
    res.status(200).json(table);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.CreateTable = async (req, res, next) => {
  try {
    const { table_number, category_id, status_id, business_id } = req.body;
    const table = await Table.create(
        { table_number, category_id, status_id, business_id }
    );
    res.status(201).json(table);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.UpdateTableById = async (req, res, next) => {
  try {
    const table = await Table.findByPk(req.params.id);
    if (!table) {
      return res.status(404).json({ message: 'Table not found' });
    }
    const { table_number, category_id, status_id, business_id } = req.body;
    await table.update({ table_number, category_id, status_id, business_id });
    res.status(200).json(table);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.DeleteTableById = async (req, res, next) => {
  try {
    const table = await Table.findByPk(req.params.id);
    if (!table) {
      return res.status(404).json({ message: 'Table not found' });
    }
    await table.destroy();
    res.status(200).json({ message: 'Table deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
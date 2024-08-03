const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

router.get('/GetAllTables', tableController.GetTables);
router.get('/GetTableById/:id', tableController.GetTableById);
router.post('/AddTable', tableController.CreateTable);
router.put('/UpdateTableById/:id', tableController.UpdateTableById);
router.delete('/DeleteTableById/:id', tableController.DeleteTableById);

module.exports = router;
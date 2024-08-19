const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/GetAllTables', authenticateToken, tableController.GetTables);
router.get('/GetTableById/:id', authenticateToken, tableController.GetTableById);
router.post('/AddTable', authenticateToken, tableController.CreateTable);
router.put('/UpdateTableById/:id', authenticateToken, tableController.UpdateTableById);
router.delete('/DeleteTableById/:id', authenticateToken, tableController.DeleteTableById);

module.exports = router;
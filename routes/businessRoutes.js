const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/GetAllBusinesses', authenticateToken, businessController.GetBusinesses);
router.get('/GetBusinessById/:id', authenticateToken, businessController.GetBusinessById);
router.post('/AddBusiness', authenticateToken, businessController.CreateBusiness);
router.put('/UpdateBusinessById/:id', authenticateToken, businessController.UpdateBusiness);
router.delete('/DeleteBusinessById/:id', authenticateToken, businessController.DeleteBusiness);

module.exports = router;
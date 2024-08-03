const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');

router.get('/GetAllBusinesses', businessController.GetBusinesses);
router.get('/GetBusinessById/:id', businessController.GetBusinessById);
router.post('/AddBusiness', businessController.CreateBusiness);
router.put('/UpdateBusinessById/:id', businessController.UpdateBusiness);
router.delete('/DeleteBusinessById/:id', businessController.DeleteBusiness);

module.exports = router;